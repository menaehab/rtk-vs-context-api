import React from "react";
import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";

export default function Register() {
  const handleRegister = (values) => {
    console.log("register", values);
  };

  return (
    <div className="p-4 pt-20 flex flex-col items-center justify-center min-h-[calc(100vh-6rem)]">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <p className="mt-2 text-center">Create a new account to start managing tasks.</p>

        <AuthForm mode="register" onSubmit={handleRegister} />

        <p className="mt-4 text-sm text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
