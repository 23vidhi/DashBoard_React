import React, { useState } from "react";

const EditModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="bg-white dark:bg-background   rounded-xl p-6 mb-6 ">
      <button onClick={openModal} className="text-blue-500">
        Edit
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`bg-white dark:bg-background   rounded-lg shadow-lg max-w-2xl w-full p-6 transform transition-transform duration-300 ${
              isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"
            }`}
          >
            <div className="flex justify-between items-center border-b pb-3">
              <h2 className="text-xl font-bold">Edit Customer Details</h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 dark:bg-background  "
              >
                ✕
              </button>
            </div>

            <p className="text-gray-600 mt-2">
              Updating user details will receive a privacy audit.
            </p>

            <form className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:bg-background  ">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:bg-background  ">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:bg-background  ">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="johndoe007"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:bg-background  ">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="example@domain.com"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:bg-background  ">
                  Status
                </label>
                <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded">
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:bg-background  ">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="202 555 0111"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:bg-background  ">
                  Language
                </label>
                <input
                  type="text"
                  placeholder="English"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:bg-background  ">
                  Country
                </label>
                <input
                  type="text"
                  placeholder="India"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded"
                />
              </div>

              <div className="col-span-2 flex items-center">
                <input type="checkbox" id="billing" className="mr-2" />
                <label htmlFor="billing" className="text-sm">
                  Use as a billing address?
                </label>
              </div>
            </form>

            <div className="flex justify-end space-x-4 mt-6">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditModal;
