import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../../app/store";

// Define a type for the slice state
interface homeState {
  pageNumber: number;
}

// Define the initial state using that type
const initialState: homeState = {
  pageNumber: 0,
};

export const homeSlice = createSlice({
  name: "home",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    currentPageNumber: (state, action: PayloadAction<number>) => {
      state.pageNumber = action.payload;
    },
  },
});

export const { currentPageNumber } = homeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default homeSlice.reducer;
