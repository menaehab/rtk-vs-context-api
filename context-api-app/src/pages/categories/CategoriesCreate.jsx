import React from "react";
import CategoryForm from "../../components/CategoryForm";

export default function CategoriesCreate() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Create Category</h1>
      <p className="mt-2">Add a new category to organize your tasks.</p>

      <CategoryForm />
    </div>
  );
}
