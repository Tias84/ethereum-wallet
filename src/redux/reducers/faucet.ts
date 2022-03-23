import { createSlice } from "@reduxjs/toolkit";
import { FaucetReducerState } from "../faucet/types";

const initialState: FaucetReducerState = {
  loading: false,
};

const faucetSlice = createSlice({
  name: "faucet",
  initialState,
  reducers: {
    walletClearDataOk: (state) => {
      state = initialState;
      return state;
    },
  },
});

export const commonActions = faucetSlice.actions;

export default faucetSlice.reducer;
