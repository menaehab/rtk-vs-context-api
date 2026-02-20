import React from "react";
import { Link } from "react-router-dom";
import Table from "../../components/Table";

export default function CategoriesList() {
  const columns = [
    {
      label: "#",
      render: (row, index) => index + 1,
    },
    {
      key: "name",
      label: "Name",
    },
    {
      label: "Actions",
      render: (row) => (
        <div className="flex gap-2">
          <Link
            to={`/categories/edit/${row.id}`}
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
    { id: 1, name: "Work" },
    { id: 2, name: "Personal" },
    { id: 3, name: "Shopping" },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Categories</h1>
          <p className="mt-2">Manage your categories here.</p>
        </div>
        <Link
          to="/categories/create"
          className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors"
        >
          Add New Category
        </Link>
      </div>
      <Table columns={columns} data={data} />;
    </div>
  );
}
