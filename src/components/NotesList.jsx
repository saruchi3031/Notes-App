// src/components/NotesList.jsx
import React from "react";
import { useSelector } from "react-redux";
import NoteCard from "./NoteCard";

export default function NotesList() {
  // Get notes from Redux store
  const notes = useSelector((state) => state.notes.items || []);

  if (!notes.length) {
    return (
      <p className="text-sm text-gray-400">
        No notes yet. Add one using the form above.
      </p>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {notes
        .slice() // copy array
        .reverse() // newest first
        .map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
    </div>
  );
}
