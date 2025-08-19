import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../features/CounterSlice.js";
import userSlice from "../features/userSlice.js";

const store = configureStore({
    reducer: {
        counter: CounterSlice,
        users: userSlice
    }
})

export default store;