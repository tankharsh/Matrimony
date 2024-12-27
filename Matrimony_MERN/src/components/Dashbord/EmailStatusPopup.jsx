import React, { useEffect } from 'react';

function EmailStatusPopup({ isOpen, statusMessage, onClose }) {
  useEffect(() => {
    if (isOpen) {
      // Automatically close the popup after 3 seconds
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer); // Clear timer on component unmount
    }
  }, [isOpen, onClose]);

  return (
    isOpen && (
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm w-full">
          <div
            className={`text-center font-bold text-lg ${
              statusMessage === 'Email Sent!' ? 'text-green-500' : 'text-green-500'
            }`}
          >
            {statusMessage}
          </div>
        </div>
      </div>
    )
  );
}

export default EmailStatusPopup;
