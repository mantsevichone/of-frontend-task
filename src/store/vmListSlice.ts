import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { type VirtualMachine } from "../types";
import startingVMList from "./data.json";

const initialState: VirtualMachine[] = startingVMList;

export const vmListSlice = createSlice({
  name: "vmList",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<VirtualMachine>) => {
      state.push(action.payload);
    },
  },
});

export const { add } = vmListSlice.actions;

export default vmListSlice.reducer;
