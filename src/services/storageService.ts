// Local storage service for managing user data and orders
// In production, this would be replaced with actual API calls to your backend

import { User, Order, Address } from '../types/User';

const STORAGE_KEYS = {
  USERS: 'falcon_users',
  ORDERS: 'falcon_orders',
  CURRENT_USER: 'falcon_current_user'
};

// User Management
export const saveUser = (user: User): void => {
  const users = getUsers();
  const existingUserIndex = users.findIndex(u => u.id === user.id);
  
  if (existingUserIndex >= 0) {
    users[existingUserIndex] = { ...user, updatedAt: new Date().toISOString() };
  } else {
    users.push(user);
  }
  
  localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
};

export const getUsers = (): User[] => {
  const users = localStorage.getItem(STORAGE_KEYS.USERS);
  return users ? JSON.parse(users) : [];
};

export const getUserByEmail = (email: string): User | null => {
  const users = getUsers();
  return users.find(user => user.email === email) || null;
};

export const getUserById = (id: string): User | null => {
  const users = getUsers();
  return users.find(user => user.id === id) || null;
};

export const setCurrentUser = (user: User): void => {
  localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
};

export const getCurrentUser = (): User | null => {
  const user = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
  return user ? JSON.parse(user) : null;
};

export const clearCurrentUser = (): void => {
  localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
};

// Order Management
export const saveOrder = (order: Order): void => {
  const orders = getOrders();
  const existingOrderIndex = orders.findIndex(o => o.id === order.id);
  
  if (existingOrderIndex >= 0) {
    orders[existingOrderIndex] = { ...order, updatedAt: new Date().toISOString() };
  } else {
    orders.push(order);
  }
  
  localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
};

export const getOrders = (): Order[] => {
  const orders = localStorage.getItem(STORAGE_KEYS.ORDERS);
  return orders ? JSON.parse(orders) : [];
};

export const getOrdersByUserId = (userId: string): Order[] => {
  const orders = getOrders();
  return orders.filter(order => order.userId === userId);
};

export const getOrderById = (orderId: string): Order | null => {
  const orders = getOrders();
  return orders.find(order => order.id === orderId) || null;
};

// Address Management
export const addUserAddress = (userId: string, address: Address): void => {
  const user = getUserById(userId);
  if (user) {
    // If this is the first address or marked as default, make it default
    if (user.addresses.length === 0 || address.isDefault) {
      user.addresses.forEach(addr => addr.isDefault = false);
      address.isDefault = true;
    }
    
    user.addresses.push(address);
    saveUser(user);
  }
};

export const updateUserAddress = (userId: string, addressId: string, updatedAddress: Address): void => {
  const user = getUserById(userId);
  if (user) {
    const addressIndex = user.addresses.findIndex(addr => addr.id === addressId);
    if (addressIndex >= 0) {
      // If setting as default, remove default from others
      if (updatedAddress.isDefault) {
        user.addresses.forEach(addr => addr.isDefault = false);
      }
      
      user.addresses[addressIndex] = updatedAddress;
      saveUser(user);
    }
  }
};

export const deleteUserAddress = (userId: string, addressId: string): void => {
  const user = getUserById(userId);
  if (user) {
    const addressIndex = user.addresses.findIndex(addr => addr.id === addressId);
    if (addressIndex >= 0) {
      const wasDefault = user.addresses[addressIndex].isDefault;
      user.addresses.splice(addressIndex, 1);
      
      // If deleted address was default and there are other addresses, make the first one default
      if (wasDefault && user.addresses.length > 0) {
        user.addresses[0].isDefault = true;
      }
      
      saveUser(user);
    }
  }
};

// Utility functions
export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

export const generateOrderId = (): string => {
  return 'FL' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).substr(2, 3).toUpperCase();
};

// Clear all data (for testing purposes)
export const clearAllData = (): void => {
  localStorage.removeItem(STORAGE_KEYS.USERS);
  localStorage.removeItem(STORAGE_KEYS.ORDERS);
  localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
};