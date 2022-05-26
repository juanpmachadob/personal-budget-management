import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    checking: true,
    user: {},
  },
  reducers: {
    login: (state, { payload }) => {
      state.checking = false;
      state.user = payload;
    },
    logout: (state) => {
      state.checking = false;
      state.user = {};
    },
    checkCredentials: (state) => {
      state.checking = false;
    },
  },
});

export const { login, logout, checkCredentials } = authSlice.actions;
export default authSlice.reducer;
