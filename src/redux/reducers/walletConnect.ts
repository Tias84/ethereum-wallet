import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { WalletconnectReducerState } from "../types/walletConnect";

const initialState: WalletconnectReducerState = {
  loading: false,
  initialized: false,
  connector: null,
  connected: false,
  chainId: 1,
  accounts: [],
  address: "",
};

const walletConnectSlice = createSlice({
  name: "walletConnect",
  initialState,
  reducers: {
    walletConnectInitialize: (state) => {
      state.loading = true;
      return state;
    },

    walletconnectInitializeOk: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.initialized = true;
      state.connector = action.payload.connector;
      return state;
    },

    walletconnectUpdateSession: (
      state,
      action: PayloadAction<{
        chainId: number;
        accounts: Array<string>;
        address: string;
      }>
    ) => {
      state.chainId = action.payload.chainId;
      state.accounts = action.payload.accounts;
      state.address = action.payload.address;

      return state;
    },

    walletconnectConnected: (
      state,
      action: PayloadAction<{
        chainId: number;
        accounts: Array<string>;
        address: string;
      }>
    ) => {
      state.connected = true;
      state.chainId = action.payload.chainId;
      state.accounts = action.payload.accounts;
      state.address = action.payload.address;

      return state;
    },

    walletconnectReset: (state) => {
      state = initialState;
      return state;
    },
  },
});

export const walletConnectActions = walletConnectSlice.actions;

export default walletConnectSlice.reducer;
