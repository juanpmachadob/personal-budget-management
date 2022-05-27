import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import categorySlice from "./categories/categorySlice";
import movementSlice from "./movements/movementSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    category: categorySlice,
    movement: movementSlice,
  },
});
