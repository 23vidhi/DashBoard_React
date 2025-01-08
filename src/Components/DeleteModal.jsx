import React, { useState } from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import { FaRegCheckCircle } from "react-icons/fa";

const DeleteModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
   
      setIsDeleting(false);
  
  };

  const handleDelete = () => {
    setIsDeleting(true);
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center items-center bg-transparent">
      <button
        onClick={openModal}
        className="px-4 py-2 bg-red-50 text-red-500 rounded"
      >
        Delete Order
      </button>

      {/* Open Modal */}
      {isOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`bg-white rounded-lg shadow-lg max-w-md w-full p-6 transform transition-transform duration-300 ${
              isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"
            }`}
          >
            <div className="flex justify-center items-center text-yellow-500 text-4xl mb-4">
              <RiErrorWarningLine />
            </div>
            <h2 className="text-2xl font-bold text-center mb-2">
              Are you sure?
            </h2>
            <p className="text-center text-gray-600 mb-6">
              You won't be able to revert this action!
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Yes, Delete Order!
              </button>
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Deleting Modal */}
      {isDeleting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 transition-opacity duration-300">
          <div className="bg-white flex flex-col rounded-lg shadow-lg max-w-sm w-full p-6 text-2xl transform transition-transform duration-300 scale-100 opacity-100">
            <div className="flex flex-col justify-center items-center mb-1">
              <FaRegCheckCircle className="text-green-500 mb-7 size-16 font-thin" />
              <h1 className="mb-3">Deleted!</h1>
              <p className="mb-5 flex text-xl w-[20rem] items-center justify-center">
                Order has been deleted.
              </p>
              <button
                className="bg-green-500 text-white w-16 rounded text-xl"
                onClick={closeModal}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteModal;
