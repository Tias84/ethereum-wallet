import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TransactionReducerState } from "../types/transaction";

const initialState: TransactionReducerState = {
  loading: false,
  lastSyncedBlock: null,
  transactions: {},
  pendingTransactions: {},
  transactionHistory: [],
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    txSync: (state) => {
      state.loading = true;
      return state;
    },
    txSyncOk: (state) => {
      state.loading = true;
      return state;
    },
    txSyncFail: (state) => {
      state.loading = true;
      return state;
    },
    txNewTx: (state) => {
      state.loading = true;
      return state;
    },

    txSendOk: (state, action: PayloadAction<{ tx: { hash: string } }>) => {
      state.loading = false;
      state.pendingTransactions[action.payload.tx?.hash] = action.payload.tx;
      return state;
    },

    txSendFail: (
      state,
      action: PayloadAction<{ tx: { hash: string }; error: any }>
    ) => {
      state.loading = false;

      if (state.pendingTransactions[action.payload.tx?.hash]) {
        state.pendingTransactions[action.payload.tx.hash] =
          action.payload.error;
      }

      return state;
    },

    txSendConfirmed: (
      state,
      action: PayloadAction<{ receipt: { transactionHash: string } }>
    ) => {
      state.transactions[action.payload.receipt.transactionHash] = {
        ...state.pendingTransactions[action.payload?.receipt?.transactionHash],
        receipt: action.payload?.receipt,
      };

      delete state.pendingTransactions[
        action.payload?.receipt?.transactionHash
      ];
      return state;
    },

    txSendFailed: (state) => {
      state.loading = true;
      return state;
    },

    txEtherscanReq: (state) => {
      state.loading = true;
      return state;
    },

    txEtherscanOk: (
      state,
      action: PayloadAction<{ data: { result: Array<any> } }>
    ) => {
      state.loading = false;
      state.transactionHistory = action.payload.data.result;
      return state;
    },

    txEtherscanFail: (state) => {
      state.loading = false;
      return state;
    },

    transactionClearDataOk: (state) => {
      state = initialState;
      return state;
    },
  },
});

export const transactionActions = transactionsSlice.actions;

export default transactionsSlice.reducer;
