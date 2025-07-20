import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Product } from '../types/Product';
import { supabase } from '../lib/supabase';

interface CartItem extends Product {
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

type CartAction = 
  | { type: 'ADD_ITEM'; payload: Product & { selectedColor?: string; selectedSize?: string } }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'UPDATE_ITEM_OPTIONS'; payload: { id: string; selectedColor?: string; selectedSize?: string } }
  | { type: 'CLEAR_CART' };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
  checkout: (userId: string, userEmail: string, userName: string, shippingAddress: any, paymentMethod: string) => Promise<string>;
} | null>(null);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(item => 
        item.id === action.payload.id && 
        item.selectedColor === action.payload.selectedColor &&
        item.selectedSize === action.payload.selectedSize
      );
      
      if (existingItemIndex >= 0) {
        const updatedItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
          ...state,
          items: updatedItems,
          total: updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
          itemCount: updatedItems.reduce((sum, item) => sum + item.quantity, 0)
        };
      }
      
      const newItem = { 
        ...action.payload, 
        quantity: 1,
        selectedColor: action.payload.selectedColor,
        selectedSize: action.payload.selectedSize
      };
      const newItems = [...state.items, newItem];
      return {
        ...state,
        items: newItems,
        total: newItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
        itemCount: newItems.reduce((sum, item) => sum + item.quantity, 0)
      };
    }
    case 'REMOVE_ITEM': {
      const filteredItems = state.items.filter(item => item.id !== action.payload);
      return {
        ...state,
        items: filteredItems,
        total: filteredItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
        itemCount: filteredItems.reduce((sum, item) => sum + item.quantity, 0)
      };
    }
    case 'UPDATE_QUANTITY': {
      const updatedItems = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: Math.max(0, action.payload.quantity) }
          : item
      ).filter(item => item.quantity > 0);
      return {
        ...state,
        items: updatedItems,
        total: updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
        itemCount: updatedItems.reduce((sum, item) => sum + item.quantity, 0)
      };
    }
    case 'UPDATE_ITEM_OPTIONS': {
      const updatedItems = state.items.map(item =>
        item.id === action.payload.id
          ? { 
              ...item, 
              selectedColor: action.payload.selectedColor || item.selectedColor,
              selectedSize: action.payload.selectedSize || item.selectedSize
            }
          : item
      );
      return {
        ...state,
        items: updatedItems,
        total: updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
        itemCount: updatedItems.reduce((sum, item) => sum + item.quantity, 0)
      };
    }
    case 'CLEAR_CART':
      return {
        items: [],
        total: 0,
        itemCount: 0
      };
    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
    itemCount: 0
  });

  const checkout = async (
    userId: string, 
    userEmail: string, 
    userName: string,
    shippingAddress: any, 
    paymentMethod: string
  ): Promise<string> => {
    try {
      // Generate 8-digit order number
      const generateOrderNumber = () => {
        return 'FL' + Math.random().toString().slice(2, 8).padStart(6, '0');
      };

      // Calculate totals
      const subtotal = state.total;
      const tax = Math.round(subtotal * 0.18); // 18% GST
      const shipping = subtotal >= 499 ? 0 : 49; // Free shipping above ₹499
      const total = subtotal + tax + shipping;

      // Create order in Supabase
      const { data: orderData, error: orderError } = await supabase
        .from('orders')
        .insert({
          order_number: generateOrderNumber(),
          user_id: userId,
          subtotal,
          tax,
          shipping,
          total,
          shipping_address: shippingAddress,
          payment_method: paymentMethod,
          status: 'confirmed',
          estimated_delivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] // 5 days from now
        })
        .select()
        .single();

      if (orderError) throw orderError;

      // Create order items
      const orderItems = state.items.map(item => ({
        order_id: orderData.id,
        product_id: item.id,
        product_name: item.name,
        product_image: item.image,
        price: item.price,
        quantity: item.quantity,
        selected_color: item.selectedColor,
        selected_size: item.selectedSize
      }));

      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems);

      if (itemsError) throw itemsError;

      // Send confirmation email (implement email service)
      try {
        console.log('Order confirmation email would be sent to:', userEmail);
        console.log('Order details:', {
          orderId: orderData.order_number,
          customerName: userName,
          items: orderItems,
          total,
          shippingAddress,
          estimatedDelivery: orderData.estimated_delivery
        });
      } catch (emailError) {
        console.error('Failed to send order confirmation email:', emailError);
        // Don't fail the order if email fails
      }

      // Clear cart after successful order
      dispatch({ type: 'CLEAR_CART' });

      return orderData.order_number;
    } catch (error) {
      console.error('Checkout failed:', error);
      throw new Error('Failed to process order. Please try again.');
    }
  };

  return (
    <CartContext.Provider value={{ state, dispatch, checkout }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};