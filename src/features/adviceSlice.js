import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    // { id: 1, title: "Lorem ipsum dolor sit amet!", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sequi maiores id repellendus, nisi ad!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sequi maiores id repellendus, nisi ad!" },
    // { id: 2, title: "Lorem ipsum dolor sit amet!", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sequi maiores id repellendus, nisi ad!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sequi maiores id repellendus, nisi ad!" }
]

export const adviceSlice = createSlice({
    name: "advice",
    initialState,
    reducers: {
        addAdvice: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { addAdvice } = adviceSlice.actions

export default adviceSlice.reducer