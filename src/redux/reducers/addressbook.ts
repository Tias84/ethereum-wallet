import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AddressBookReducerState } from "../types/addressbook";

const initialState: AddressBookReducerState = {
  loading: false,
  addresses: [],
};

const addressbookSlice = createSlice({
  name: "addressbook",
  initialState,
  reducers: {
    addressBookFetch: (state) => {
      state.loading = true;
      return state;
    },

    addressBookFetchOk: (state, action: PayloadAction<Array<string>>) => {
      state.loading = false;
      state.addresses = action.payload;
      return state;
    },

    addressBookFetchFail: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
      return state;
    },

    addressBookLoadOk: (state, action: PayloadAction<Array<string>>) => {
      state.error = action?.payload;
      return state;
    },

    addressBookUpdateOk: (state, action: PayloadAction<string>) => {
      if (!state.addresses.includes(action.payload)) {
        state.addresses.push(action.payload);
      }

      return state;
    },

    adressbookClearDataOk: (state) => {
      state = initialState;
      return state;
    },
  },
});

export const addressbookActions = addressbookSlice.actions;

export default addressbookSlice.reducer;
