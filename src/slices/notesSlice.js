// src/slices/notesSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

// Load notes from LocalStorage or start with empty array
const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];

const initialState = {
  items: storedNotes,
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      const newNote = {
        id: uuidv4(),
        title: action.payload.title,
        content: action.payload.content,
        category: action.payload.category,
        createdAt: new Date().toISOString(),
      };
      state.items.push(newNote);
      localStorage.setItem("notes", JSON.stringify(state.items));
    },

    updateNote: (state, action) => {
      const index = state.items.findIndex((note) => note.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = {
          ...state.items[index],
          title: action.payload.title,
          content: action.payload.content,
          category: action.payload.category,
        };
        localStorage.setItem("notes", JSON.stringify(state.items));
      }
    },

    deleteNote: (state, action) => {
      state.items = state.items.filter((note) => note.id !== action.payload);
      localStorage.setItem("notes", JSON.stringify(state.items));
    },

    clearNotes: (state) => {
      state.items = [];
      localStorage.removeItem("notes");
    },
  },
});

export const { addNote, updateNote, deleteNote, clearNotes } = notesSlice.actions;
export default notesSlice.reducer;
