import React, { useState } from "react";

export default function TaskForm({
  initialValues = {},
  users = [],
  categories = [],
  onSubmit,
}) {
  const [title, setTitle] = useState(initialValues.title || "");
  const [description, setDescription] = useState(
    initialValues.description || ""
  );
  const [status, setStatus] = useState(initialValues.status || "pending");
  const [user, setUser] = useState(initialValues.user || "");
  const [category, setCategory] = useState(initialValues.category || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ title, description, status, user, category });
    } else {
      console.log({ title, description, status, user, category });
    }
  };

  return (
    <form className="mt-6" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          rows={4}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="status"
          className="block text-sm font-medium text-gray-700"
        >
          Status
        </label>
        <select
          id="status"
          name="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="user"
          className="block text-sm font-medium text-gray-700"
        >
          Assigned User
        </label>
        <select
          id="user"
          name="user"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">-- select user --</option>
          {users.map((u) => (
            <option key={u.id} value={u.name}>
              {u.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700"
        >
          Category
        </label>
        <select
          id="category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">-- select category --</option>
          {categories.map((c) => (
            <option key={c.id} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors"
      >
        {initialValues.id ? "Update Task" : "Create Task"}
      </button>
    </form>
  );
}
