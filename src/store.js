import { configureStore } from "@reduxjs/toolkit";
import { authReducer, filterReducer } from "./features/index";

export const store = configureStore({
  reducer: { auth: authReducer, filter: filterReducer },
});
