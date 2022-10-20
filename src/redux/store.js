import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./slice/studentSlice";


//ROOT REDUCER
export const store = configureStore({
    reducer: {
        student: studentReducer,
    },
})  