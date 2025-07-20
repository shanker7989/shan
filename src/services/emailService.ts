// Email service for sending order confirmation emails
// This would integrate with a real email service like SendGrid, Mailgun, or AWS SES

export interface EmailTemplate {
  to: string;
  subject: string;
  html: string;
}

export const sendOrderConfirmationEmail = async (
  userEmail: string,
  orderDetails: {
    orderId: string;
    customerName: string;
    items: Array<{
      name: string;
      quantity: number;
      price: number;
    }>;
    total: number;
    shippingAddress: string;
    estimatedDelivery: string;
  }
): Promise<boolean> => {
  try {
    const emailTemplate: EmailTemplate = {
      to: userEmail,
      subject: `Order Confirmation - ${orderDetails.orderId}`,
      html: generateOrderConfirmationHTML(orderDetails)
    };

    // In a real application, you would integrate with an email service
    // For now, we'll simulate the email sending
    console.log('Sending order confirmation email:', emailTemplate);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For demo purposes, we'll always return true
    // In production, this would return the actual result from the email service
    return true;
  } catch (error) {
    console.error('Failed to send order confirmation email:', error);
    return false;
  }
};

const generateOrderConfirmationHTML = (orderDetails: any): string => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Order Confirmation</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1e40af; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background: #f9f9f9; }
            .order-details { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; }
            .item { border-bottom: 1px solid #eee; padding: 10px 0; }
            .total { font-weight: bold; font-size: 18px; color: #1e40af; }
            .footer { text-align: center; padding: 20px; color: #666; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🎉 Order Confirmed!</h1>
                <p>Thank you for shopping with Falcon Lifestyle</p>
            </div>
            
            <div class="content">
                <h2>Hi ${orderDetails.customerName},</h2>
                <p>Your order has been confirmed and is being processed. Here are your order details:</p>
                
                <div class="order-details">
                    <h3>Order #${orderDetails.orderId}</h3>
                    
                    <h4>Items Ordered:</h4>
                    ${orderDetails.items.map(item => `
                        <div class="item">
                            <strong>${item.name}</strong><br>
                            Quantity: ${item.quantity} × ₹${item.price.toLocaleString()}
                        </div>
                    `).join('')}
                    
                    <div class="total">
                        Total: ₹${orderDetails.total.toLocaleString()}
                    </div>
                    
                    <h4>Shipping Address:</h4>
                    <p>${orderDetails.shippingAddress}</p>
                    
                    <h4>Estimated Delivery:</h4>
                    <p>${orderDetails.estimatedDelivery}</p>
                </div>
                
                <p>We'll send you another email with tracking information once your order ships.</p>
                
                <p>If you have any questions, please contact our customer service team at:</p>
                <ul>
                    <li>Email: support@falconlifestyle.com</li>
                    <li>Phone: +91 98765 43210</li>
                </ul>
            </div>
            
            <div class="footer">
                <p>Thank you for choosing Falcon Lifestyle!</p>
                <p>© 2024 Falcon Lifestyle. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
  `;
};

export const sendWelcomeEmail = async (userEmail: string, userName: string): Promise<boolean> => {
  try {
    const emailTemplate: EmailTemplate = {
      to: userEmail,
      subject: 'Welcome to Falcon Lifestyle!',
      html: generateWelcomeHTML(userName)
    };

    console.log('Sending welcome email:', emailTemplate);
    await new Promise(resolve => setTimeout(resolve, 500));
    return true;
  } catch (error) {
    console.error('Failed to send welcome email:', error);
    return false;
  }
};

const generateWelcomeHTML = (userName: string): string => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Welcome to Falcon Lifestyle</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1e40af; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background: #f9f9f9; }
            .cta-button { background: #1e40af; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; margin: 20px 0; }
            .footer { text-align: center; padding: 20px; color: #666; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Welcome to Falcon Lifestyle! 🎉</h1>
            </div>
            
            <div class="content">
                <h2>Hi ${userName},</h2>
                <p>Welcome to the Falcon Lifestyle family! We're excited to have you on board.</p>
                
                <p>As a new member, you'll enjoy:</p>
                <ul>
                    <li>🚚 Free shipping on orders above ₹499</li>
                    <li>🔄 30-day easy returns</li>
                    <li>⭐ Exclusive member discounts</li>
                    <li>📱 Early access to new products</li>
                </ul>
                
                <a href="https://falconlifestyle.com" class="cta-button">Start Shopping Now</a>
                
                <p>If you have any questions, our customer service team is here to help:</p>
                <ul>
                    <li>Email: support@falconlifestyle.com</li>
                    <li>Phone: +91 98765 43210</li>
                </ul>
            </div>
            
            <div class="footer">
                <p>Happy Shopping!</p>
                <p>© 2024 Falcon Lifestyle. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
  `;
};