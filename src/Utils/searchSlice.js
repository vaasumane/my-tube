import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchItems: {}, // Initialize as empty object
    searchText: "",
  },
  reducers: {
    cacheResult: (state, action) => {
    //   state.searchItems = Object.assign(state,action.payload);
    return {
        ...state,
        searchItems: {
            ...state.searchItems,
            ...action.payload
        }
    };
    },
    setSearchText: (state, action) => {
        // state.searchText = action.payload;
        return {
            ...state,
            searchText: action.payload
        };
         
    },
  },
});

export const { cacheResult, setSearchText } = searchSlice.actions;
export default searchSlice.reducer;
