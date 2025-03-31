import { configureStore } from "@reduxjs/toolkit";
import salesReducer from "./salesSlice";

export const store = configureStore({
    reducer: {
        sales: salesReducer,
    },
});

// Define types for state and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
