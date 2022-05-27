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
    createMovement: (state, { payload }) => {
      state.movements.push(payload);
    },
    deleteMovement: (state, { payload }) => {
      state.movements = state.movements.filter(
        (movement) => movement.id !== payload
      );
    },
  },
});

export const { getMovements, getTotals, createMovement, deleteMovement } =
  movementSlice.actions;
export default movementSlice.reducer;
