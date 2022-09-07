import { createSlice } from "@reduxjs/toolkit"

const initialState = []

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        createPost: (state, action) => {
            state.push(action.payload)
        },
        modifyPost: () => {

        }
    }
})

export const { createPost } = postSlice.actions

export default postSlice.reducer