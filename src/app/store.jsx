import { configureStore } from "@reduxjs/toolkit"
import mySlice from "../feature/showSlice"

const store = configureStore({
    reducer: {
        show : mySlice,
    },
})

export default store;