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
    deleteMovement: (state, { payload }) => {
      state.movements = state.movements.filter(
        (movement) => movement.id !== payload
      );
    },
  },
});

export const { getMovements, getTotals, deleteMovement } = movementSlice.actions;
export default movementSlice.reducer;
