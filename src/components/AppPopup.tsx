import React, { useState, useEffect } from 'react';
import { X, Download, Smartphone } from 'lucide-react';

const AppPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user has already dismissed the popup
    const dismissed = localStorage.getItem('appPopupDismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('appPopupDismissed', 'true');
  };

  const handleDownload = () => {
    // In a real app, this would redirect to app stores
    alert('App download would start here!');
    handleDismiss();
  };

  if (isDismissed || !isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <div className="bg-white rounded-lg shadow-2xl border border-gray-200 p-4 transform transition-all duration-300 animate-slide-up">
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          <X className="h-4 w-4" />
        </button>
        
        <div className="flex items-start space-x-3">
          <div className="bg-blue-600 p-2 rounded-lg flex-shrink-0">
            <Smartphone className="h-6 w-6 text-white" />
          </div>
          
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-1">
              Get the Falcon App
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Shop faster with our mobile app. Get exclusive deals and notifications!
            </p>
            
            <div className="flex space-x-2">
              <button
                onClick={handleDownload}
                className="bg-blue-600 text-white px-3 py-1.5 rounded text-sm font-medium hover:bg-blue-700 transition-colors flex items-center"
              >
                <Download className="h-3 w-3 mr-1" />
                Download
              </button>
              <button
                onClick={handleDismiss}
                className="text-gray-500 text-sm hover:text-gray-700"
              >
                Not now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPopup;