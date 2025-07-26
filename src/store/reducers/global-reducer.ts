import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface InitialStateTypes {
  totalItemsInCart: number;
}

const initialState: InitialStateTypes = {
  totalItemsInCart: 0,
};

export const globalReducer = createSlice({
  name: "app-state",
  initialState,
  reducers: {
    setTotalItemsInCart: (state, action: PayloadAction<number>) => {
      state.totalItemsInCart = action.payload;
    },
  },
});

export const { setTotalItemsInCart } = globalReducer.actions;
export default globalReducer.reducer;
