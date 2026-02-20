import React from "react";
import { useParams, Link } from "react-router-dom";

export default function TaskShow() {
  const { id } = useParams();
  // placeholder data
  const sampleTasks = [
    {
      id: 1,
      title: "Buy groceries",
      description: "Milk, bread, eggs",
      status: "pending",
      user: "Alice",
      category: "Shopping",
    },
    {
      id: 2,
      title: "Finish project",
      description: "Complete the UI for the dashboard",
      status: "completed",
      user: "Bob",
      category: "Work",
    },
  ];
  const task =
    sampleTasks.find((t) => t.id === parseInt(id, 10)) || {
      id,
      title: "Unknown",
      description: "",
      status: "",
      user: "",
      category: "",
    };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Task Details</h1>
      <p className="mt-2">Viewing information for task #{task.id}</p>

      <div className="mt-6 bg-white shadow rounded-lg p-6">
        <dl className="grid grid-cols-1 gap-y-4 gap-x-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Title</dt>
            <dd className="mt-1 text-sm text-gray-900">{task.title}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-gray-500">Description</dt>
            <dd className="mt-1 text-sm text-gray-900">{task.description}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Status</dt>
            <dd className="mt-1 text-sm text-gray-900">{task.status}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">User</dt>
            <dd className="mt-1 text-sm text-gray-900">{task.user}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Category</dt>
            <dd className="mt-1 text-sm text-gray-900">{task.category}</dd>
          </div>
        </dl>
      </div>

      <div className="mt-6 flex gap-2">
        <Link
          to="/tasks"
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Back to list
        </Link>
        <Link
          to={`/tasks/edit/${task.id}`}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Edit
        </Link>
      </div>
    </div>
  );
}
