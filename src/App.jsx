// src/App.jsx
import React from "react";
import { useSelector } from "react-redux";
import LoginPage from "./components/LoginPage";
import NotesPage from "./components/NotesPage";

function App() {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {!user ? <LoginPage /> : <NotesPage />}
    </div>
  );
}

export default App;
