import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
  },
  reducers: {
    getCategories: (state, { payload }) => {
      state.categories = payload;
    },
    clearCategories: (state) => {
      state.categories = [];
    },
  },
});

export const { getCategories } = categorySlice.actions;
export default categorySlice.reducer;
