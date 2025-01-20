import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyLoading: true,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
    markFetchingStarted: (state) => {
      state.currentlyLoading = true;
    },
    markFetchingFinished: (state) => {
      state.currentlyLoading = false;
    },
  },
});

export const fetchStatusAction = fetchStatusSlice.actions;
export default fetchStatusSlice;
