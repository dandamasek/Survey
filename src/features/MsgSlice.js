import { createSlice } from "@reduxjs/toolkit";

// A Redux slice for managing the state of the projects
export const msgSlice = createSlice({
    name: "msg",
    initialState: "fail",
    reducers: {
        // A reducer that adds a new project to the projects state array
       setMsg: (state, action) => {
        const msg = action.payload
        state = msg
        return state
        }
    }
})

// Export the addProject action creator from the projectsSlice
export const { setMsg } = msgSlice.actions

// Export the projectsSlice reducer
export default msgSlice.reducer
