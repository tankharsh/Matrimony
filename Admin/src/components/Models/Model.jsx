import React from 'react';

const Modal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-lg font-semibold">Confirm Deletion</h2>
        <p>Are you sure you want to delete this user?</p>
        <div className="mt-4 flex justify-end">
          <button onClick={onClose} className="mr-2 bg-gray-300 text-black px-3 py-1 rounded">Cancel</button>
          <button onClick={onConfirm} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
