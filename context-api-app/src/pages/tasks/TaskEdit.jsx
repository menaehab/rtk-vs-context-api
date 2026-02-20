import React from "react";
import { useParams } from "react-router-dom";
import TaskForm from "../../components/TaskForm";

export default function TaskEdit() {
  const { id } = useParams();

  // In a real app you would fetch the task by id
  const existing = {
    id,
    title: "Sample task",
    description: "This is a placeholder description",
    status: "pending",
    user: "Alice",
    category: "Work",
  };

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
    console.log("update task", id, values);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Edit Task</h1>
      <p className="mt-2">Modify the task details.</p>

      <TaskForm
        initialValues={existing}
        users={sampleUsers}
        categories={sampleCategories}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
