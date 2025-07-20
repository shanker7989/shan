import React, { useState } from 'react';
import { Search, Package, Truck, CheckCircle } from 'lucide-react';

const TrackOrder: React.FC = () => {
  const [orderId, setOrderId] = useState('');
  const [email, setEmail] = useState('');
  const [trackingInfo, setTrackingInfo] = useState(null);

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock tracking information
    setTrackingInfo({
      orderId: orderId,
      status: 'shipped',
      estimatedDelivery: '2024-01-15',
      items: [
        { name: 'Premium Leather iPhone Case', quantity: 1, price: 1299 },
        { name: 'Wireless Fast Charging Pad', quantity: 1, price: 899 }
      ],
      timeline: [
        { status: 'Order Placed', date: '2024-01-10', time: '10:30 AM', completed: true },
        { status: 'Processing', date: '2024-01-11', time: '2:15 PM', completed: true },
        { status: 'Shipped', date: '2024-01-12', time: '9:45 AM', completed: true },
        { status: 'Out for Delivery', date: '2024-01-15', time: 'Expected', completed: false },
        { status: 'Delivered', date: '2024-01-15', time: 'Expected', completed: false }
      ]
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Track Your Order</h1>
          <p className="text-gray-600">Enter your order details to track your shipment</p>
        </div>

        {/* Track Order Form */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <form onSubmit={handleTrackOrder} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Order ID
                </label>
                <input
                  type="text"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  placeholder="Enter your order ID"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2"
            >
              <Search className="h-5 w-5" />
              <span>Track Order</span>
            </button>
          </form>
        </div>

        {/* Tracking Information */}
        {trackingInfo && (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Order Header */}
            <div className="bg-blue-600 text-white p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold">Order #{trackingInfo.orderId}</h2>
                  <p className="text-blue-100">Expected delivery: {trackingInfo.estimatedDelivery}</p>
                </div>
                <div className="text-right">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {trackingInfo.status.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>

            {/* Order Timeline */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Timeline</h3>
              <div className="space-y-4">
                {trackingInfo.timeline.map((event, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      event.completed ? 'bg-green-500' : 'bg-gray-300'
                    }`}>
                      {event.completed ? (
                        <CheckCircle className="h-5 w-5 text-white" />
                      ) : (
                        <div className="w-3 h-3 bg-white rounded-full" />
                      )}
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex justify-between items-center">
                        <p className={`font-medium ${
                          event.completed ? 'text-gray-900' : 'text-gray-500'
                        }`}>
                          {event.status}
                        </p>
                        <p className="text-sm text-gray-500">
                          {event.date} at {event.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Items */}
            <div className="border-t p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Items</h3>
              <div className="space-y-3">
                {trackingInfo.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                    </div>
                    <p className="font-medium text-gray-900">₹{item.price.toLocaleString()}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Support */}
            <div className="bg-gray-50 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-900 font-medium">Need help with your order?</p>
                  <p className="text-gray-600 text-sm">Contact our support team</p>
                </div>
                <div className="flex space-x-3">
                  <a
                    href="tel:+919876543210"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Call Support
                  </a>
                  <a
                    href="mailto:support@falconlifestyle.com"
                    className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Email Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackOrder;