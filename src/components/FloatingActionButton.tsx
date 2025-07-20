import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, X, HelpCircle } from 'lucide-react';

const FloatingActionButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      color: 'bg-green-500 hover:bg-green-600',
      action: () => window.open('https://wa.me/919876543210', '_blank')
    },
    {
      icon: Phone,
      label: 'Call Us',
      color: 'bg-blue-500 hover:bg-blue-600',
      action: () => window.open('tel:+919876543210')
    },
    {
      icon: Mail,
      label: 'Email',
      color: 'bg-purple-500 hover:bg-purple-600',
      action: () => window.open('mailto:info@falconlifestyle.com')
    },
    {
      icon: HelpCircle,
      label: 'Help',
      color: 'bg-orange-500 hover:bg-orange-600',
      action: () => window.open('/contact', '_self')
    }
  ];

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Action Buttons */}
      {isOpen && (
        <div className="mb-4 space-y-3">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <div
                key={index}
                className="flex items-center space-x-3 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="bg-white text-gray-800 px-3 py-1 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap">
                  {action.label}
                </span>
                <button
                  onClick={action.action}
                  className={`${action.color} text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110`}
                >
                  <Icon className="h-5 w-5" />
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* Main FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>
    </div>
  );
};

export default FloatingActionButton;