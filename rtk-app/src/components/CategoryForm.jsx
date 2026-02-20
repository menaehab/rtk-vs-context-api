import React from "react";

export default function CategoryForm() {
  return (
    <form className="mt-6">
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Category Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors"
      >
        Create Category
      </button>
    </form>
  );
}
