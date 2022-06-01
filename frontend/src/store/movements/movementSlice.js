import { createSlice } from "@reduxjs/toolkit";

const movementSlice = createSlice({
  name: "movement",
  initialState: {
    totals: {
      general: 0,
      incomes: 0,
      expenses: 0,
    },
    count: 0,
    movements: [],
    active: {
      concept: "",
      type: "",
      amount: "",
      date: "",
      categoryId: "",
    },
  },
  reducers: {
    getMovements: (state, { payload }) => {
      state.count = payload.count;
      state.movements = payload.rows;
    },
    getTotals: (state, { payload }) => {
      state.totals = payload;
    },
    deleteMovement: (state, { payload }) => {
      state.movements = state.movements.filter((movement) => {
        if (movement.id === payload){
          if (movement.type === "incomes"){
            state.totals.incomes -= movement.amount;
            state.totals.general -= movement.amount;
          }
          if (movement.type === "expenses") {
            state.totals.expenses -= movement.amount;
            state.totals.general += movement.amount;
          }
        }
        return movement.id !== payload;
      });
      state.count--;
    },
    setActiveMovement: (state, { payload }) => {
      state.active = payload;
    },
  },
});

export const { getMovements, getTotals, deleteMovement, setActiveMovement } =
  movementSlice.actions;
export default movementSlice.reducer;
