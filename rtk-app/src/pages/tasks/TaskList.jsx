import React from "react";
import { Link } from "react-router-dom";
import Table from "../../components/Table";

export default function TaskList() {
  const columns = [
    {
      label: "#",
      render: (row, index) => index + 1,
    },
    {
      key: "title",
      label: "Title",
    },
    {
      key: "status",
      label: "Status",
    },
    {
      key: "user",
      label: "User",
    },
    {
      key: "category",
      label: "Category",
    },
    {
      label: "Actions",
      render: (row) => (
        <div className="flex gap-2">
          <Link
            to={`/tasks/show/${row.id}`}
            className="px-3 py-1 text-xs bg-green-100 text-green-600 rounded-lg hover:bg-green-200"
          >
            View
          </Link>

          <Link
            to={`/tasks/edit/${row.id}`}
            className="px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200"
          >
            Edit
          </Link>

          <button
            onClick={() => console.log("delete", row.id)}
            className="px-3 py-1 text-xs bg-red-100 text-red-600 rounded-lg hover:bg-red-200"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  const data = [
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

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Tasks</h1>
          <p className="mt-2">Manage your tasks here.</p>
        </div>
        <Link
          to="/tasks/create"
          className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors"
        >
          Add New Task
        </Link>
      </div>
      <Table columns={columns} data={data} />
    </div>
  );
}
