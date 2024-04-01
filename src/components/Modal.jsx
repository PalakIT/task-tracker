import React from 'react';

const Modal = ({ onClose, children }) => {
    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center">
            <div className="min-w-96 dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-800 dark:text-white rounded-lg p-8 max-w-lg mx-auto bg-white">
                <div className="flex justify-end items-center mb-4">
                    <button onClick={onClose} className="text-sm text-gray-500 hover:text-gray-700 focus:outline-none">
                        close
                    </button>
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default Modal;
