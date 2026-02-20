import React from "react";
import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";

export default function Login() {
  const handleLogin = (values) => {
    console.log("login", values);
  };

  return (
    <div className="p-4 pt-20 flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <p className="mt-2 text-center">Enter your credentials to access the task manager.</p>

        <AuthForm mode="login" onSubmit={handleLogin} />

        <p className="mt-4 text-sm text-center">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
