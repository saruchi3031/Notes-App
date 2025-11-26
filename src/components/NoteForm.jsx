// src/components/NoteForm.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../slices/notesSlice";

export default function NoteForm() {
  const dispatch = useDispatch();

  // Local state for the new note
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() && !content.trim()) return;

    dispatch(
      addNote({
        title: title.trim() || "Untitled",
        content: content.trim(),
        category: category.trim(),
      })
    );

    // Reset form
    setTitle("");
    setContent("");
    setCategory("");
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-5">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Add a Note</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            placeholder="Note title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Category
          </label>
          <input
            type="text"
            placeholder="e.g. Work, Personal, Ideas"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition"
          />
        </div>

        {/* Content */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Content
          </label>
          <textarea
            placeholder="Write your note here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500 min-h-[120px] transition"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
        >
          Save Note
        </button>
      </form>
    </div>
  );
}
