import { createSlice } from "@reduxjs/toolkit";

const movementSlice = createSlice({
  name: "movement",
  initialState: {
    movements: [],
  },
  reducers: {
    getMovements: (state, { payload }) => {
      state.movements = payload;
    },
  },
});

export const { getMovements } = movementSlice.actions;
export default movementSlice.reducer;
