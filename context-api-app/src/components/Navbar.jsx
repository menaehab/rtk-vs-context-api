import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className=" bg-blue-700 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">Task Manager</Link>
      <nav className="space-x-4">
        <Link to="/categories" className="text-white hover:text-gray-300">
          Categories
        </Link>
        <Link to="/tasks" className="text-white hover:text-gray-300">
          Tasks
        </Link>
        <Link to="/login" className="text-white hover:text-gray-300">
          Login
        </Link>
      </nav>
    </div>
  );
}
