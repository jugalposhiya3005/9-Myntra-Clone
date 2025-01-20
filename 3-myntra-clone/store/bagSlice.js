import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bagItem",
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      state.push(action.payload);
    },
    removeToBag: (state, action) => {
      return state.filter((itemId) => itemId !== action.payload);
    },
    clearBag: () => {
      return [];
    },
  },
});

export const bagActions = bagSlice.actions;
export default bagSlice;
