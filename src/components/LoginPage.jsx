// src/components/LoginPage.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../slices/authSlice";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedName = username.trim();
    if (!trimmedName) return;

    dispatch(login(trimmedName));
    setUsername(""); // optional: clear input after login (if needed)
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Notes App Login
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter any username (no password)"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
        >
          Login
        </button>
      </form>

      <p className="text-xs text-gray-500 mt-4 text-center">
        Frontend-only login — no real authentication.
      </p>
    </div>
  );
}
