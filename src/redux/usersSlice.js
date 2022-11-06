import { createSlice } from "@reduxjs/toolkit";
const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    storeToken(state, action) {
      return [action.payload];
    },
    reset: () => [],
    updateList(state, action) {
      return state;
    },
    deleteList(state, action) {
      return state;
    },
  },
});
const { actions, reducer } = usersSlice;
export const { storeToken, updateList, deleteList, reset } = actions;
export default reducer;
