import { configureStore } from "@reduxjs/toolkit"
import adviceReducer from '../features/adviceSlice'

export const store = configureStore({
    reducer: {
        advice: adviceReducer,
    },
})