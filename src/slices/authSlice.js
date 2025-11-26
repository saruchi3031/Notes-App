// src/slices/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // we will store just a string (username), not an object
  user: localStorage.getItem("user") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      // action.payload is a string (username)
      state.user = action.payload;
      localStorage.setItem("user", action.payload);
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
