import React from 'react'
import CategoryForm from '../../components/CategoryForm'

export default function CategoriesEdit() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Edit Category</h1>
      <p className="mt-2">Modify the details of your category.</p>

      <CategoryForm />
    </div> 
  )
}
