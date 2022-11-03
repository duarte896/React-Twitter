import { createSlice } from "@reduxjs/toolkit";
const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    storeToken(state, action) {
      return [action.payload];
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
export const { storeToken, updateList, deleteList } = actions;
export default reducer;
