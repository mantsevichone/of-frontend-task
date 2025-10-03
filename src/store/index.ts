import { configureStore } from "@reduxjs/toolkit";

import vmListReducer from "./vmListSlice";

export const store = configureStore({
  reducer: {
    vmList: vmListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
