import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "item",
  initialState: { items: [], filteredItems: [] },
  reducers: {
    addInitialItems: (store, action) => {
      store.items = action.payload;
      store.filteredItems = action.payload;
    },
    searchItem: (state, action) => {
      const query = action.payload.toLowerCase();
      
      if (!query) {        
        state.filteredItems = state.items; 
      } else {
        state.filteredItems = state.items.filter((item) =>
          item.item_name.toLowerCase().includes(query.toString()) || item.company.toLowerCase().includes(query.toString())
        );
      }
    },
  },
});

export const itemActions = itemSlice.actions;
export default itemSlice;
