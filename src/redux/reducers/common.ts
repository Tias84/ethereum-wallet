import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CommonReducerState } from "../types/common";
import { AvailableNetworks } from "../../imports/config";

const initialState: CommonReducerState = {
  guide: {},
  selectedNetwork: "polygon-mumbai",
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    networkSelect: (state, action: PayloadAction<AvailableNetworks>) => {
      state.selectedNetwork = action.payload;
      return state;
    },

    guideCompleted: (state, action: PayloadAction<string>) => {
      state.guide[action.payload] = true;
      return state;
    },

    clearDataOk: (state) => {
      state = initialState;
      return state;
    },
  },
});

export const commonActions = commonSlice.actions;

export default commonSlice.reducer;
