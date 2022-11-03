import { createSlice } from "@reduxjs/toolkit";
const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    createList(state, action) {
      return state;
    },
    updateList(state, action) {
      return state;
    },
    deleteList(state, action) {
      return state;
    },
  },
});
const { actions, reducer } = usersSlice;
export const { createList, updateList, deleteList } = actions;
export default reducer;
