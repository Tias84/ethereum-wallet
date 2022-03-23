import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { WalletReducerState, CreationSteps } from "../types/wallet";
import { Wallet } from "ethers";

const initialState: WalletReducerState = {
  loading: false,
  wallet: undefined,
  creationStep: CreationSteps.INITIAL,
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    importWallet: (state, action: PayloadAction<string>) => {
      state.loading = true;
      return state;
    },

    generateWallet: (state) => {
      state.loading = true;
      return state;
    },

    generateWalletOk: (state, action: PayloadAction<{ wallet: Wallet }>) => {
      state.loading = false;
      state.wallet = action.payload.wallet;
      return state;
    },

    generateWalletFail: (state, action: PayloadAction<{ error: any }>) => {
      state.loading = false;
      state.wallet = undefined;
      state.error = action.payload.error;
      return state;
    },

    resetError: (state) => {
      state.error = undefined;
      return state;
    },

    walletStepsNext: (state) => {
      state.creationStep += 1;
      return state;
    },

    walletClearDataOk: (state) => {
      state = initialState;
      return state;
    },
  },
});

export const walletActions = walletSlice.actions;

export default walletSlice.reducer;
