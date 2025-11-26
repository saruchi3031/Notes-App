// src/components/NotesPage.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../slices/authSlice";
import NoteForm from "./NoteForm";
import NotesList from "./NotesList";

export default function NotesPage() {
  const user = useSelector((state) => state.auth.user); // username as string
  const dispatch = useDispatch();

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 p-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-3 sm:mb-0">
          Notes App
        </h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-700">Hi, {user}</span>
          <button
            onClick={() => dispatch(logout())}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg transition duration-200"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Add Note Form */}
      <NoteForm />

      {/* Notes List */}
      <div className="mt-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Your Notes</h2>
        <NotesList />
      </div>
    </div>
  );
}
