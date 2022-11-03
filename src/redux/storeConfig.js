import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";

const store = configureStore({
  reducer: { list: usersReducer },
});
export default store;
