import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

// Create the Redux store and combine reducers
export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

// Define TypeScript helper types for use throughout the app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
