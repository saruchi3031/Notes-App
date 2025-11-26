// src/components/NoteCard.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteNote, updateNote } from "../slices/notesSlice";

export default function NoteCard({ note }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const [editTitle, setEditTitle] = useState(note.title);
  const [editContent, setEditContent] = useState(note.content);
  const [editCategory, setEditCategory] = useState(note.category);

  const formattedDate = new Date(note.createdAt).toLocaleString();

  const handleSave = () => {
    dispatch(
      updateNote({
        id: note.id,
        title: editTitle.trim() || "Untitled",
        content: editContent,
        category: editCategory,
      })
    );
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditTitle(note.title);
    setEditContent(note.content);
    setEditCategory(note.category);
  };

  return (
    <div className="bg-white border rounded-2xl p-4 flex flex-col gap-3 shadow-sm">
      {/* Title & Category */}
      <div className="flex justify-between items-start gap-2">
        {isEditing ? (
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="flex-1 border rounded-lg px-2 py-1 text-sm font-semibold outline-none focus:ring-2 focus:ring-blue-300 transition"
          />
        ) : (
          <h3 className="text-sm font-semibold text-gray-800">{note.title}</h3>
        )}

        <span className="text-[10px] px-2 py-1 rounded-full bg-blue-100 text-blue-700 whitespace-nowrap">
          {note.category || "Uncategorized"}
        </span>
      </div>

      {/* Content */}
      {isEditing ? (
        <textarea
          value={editContent}
          onChange={(e) => setEditContent(e.target.value)}
          className="w-full border rounded-lg px-2 py-1 text-xs min-h-[80px] outline-none focus:ring-2 focus:ring-blue-300 transition"
        />
      ) : (
        <p className="text-xs text-gray-700 whitespace-pre-line">
          {note.content || <span className="italic text-gray-400">No content</span>}
        </p>
      )}

      {/* Created date */}
      <p className="text-[10px] text-gray-400">Created: {formattedDate}</p>

      {/* Actions */}
      <div className="flex justify-end gap-2 mt-2">
        {isEditing ? (
          <>
            <button
              onClick={handleCancel}
              className="text-xs px-3 py-1 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="text-xs px-3 py-1 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
            >
              Save
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="text-xs px-3 py-1 rounded-lg border border-blue-300 text-blue-700 hover:bg-blue-50 transition"
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteNote(note.id))}
              className="text-xs px-3 py-1 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}
