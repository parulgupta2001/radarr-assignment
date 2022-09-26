import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRatingData, getSortedData } from "../helperFunctions";
import axios from "axios";

const initialState = {
  sortOrder: null,
  rating: null,
  houseData: [],
  filteredData: [],
};

const data = createAsyncThunk("filter/data", async () => {
  const response = await axios.get(
    "https://www.anapioficeandfire.com/api/houses?pageSize=30"
  );
  return response.data;
});

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    sort: (state, action) => {
      state.sortOrder = action.payload;
      state.filteredData = getSortedData(state);
    },

    houseRating: (state, action) => {
      state.rating = action.payload;
      state.filteredData = getRatingData(state);
    },

    reset: (state) => {
      state.filteredData = state.houseData;
      state.sortOrder = null;
      state.rating = null;
    },
  },
  extraReducers: {
    [data.fulfilled]: (state, action) => {
      state.houseData = action.payload;
      state.filteredData = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { sort, houseRating, reset } = filterSlice.actions;
export { data };
