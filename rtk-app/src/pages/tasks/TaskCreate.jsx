import React from "react";
import TaskForm from "../../components/TaskForm";

export default function TaskCreate() {
  // these would normally be fetched from an API or context
  const sampleUsers = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];

  const sampleCategories = [
    { id: 1, name: "Work" },
    { id: 2, name: "Personal" },
    { id: 3, name: "Shopping" },
  ];

  const handleSubmit = (values) => {
    console.log("create task", values);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Create Task</h1>
      <p className="mt-2">Fill in details for the new task.</p>

      <TaskForm
        users={sampleUsers}
        categories={sampleCategories}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
