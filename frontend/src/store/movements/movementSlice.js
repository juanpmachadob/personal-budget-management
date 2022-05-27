import { createSlice } from "@reduxjs/toolkit";

const movementSlice = createSlice({
  name: "movement",
  initialState: {
    totals: {},
    movements: [],
  },
  reducers: {
    getMovements: (state, { payload }) => {
      state.movements = payload;
    },
    getTotals: (state, { payload }) => {
      state.totals = payload;
    },
  },
});

export const { getMovements, getTotals } = movementSlice.actions;
export default movementSlice.reducer;
