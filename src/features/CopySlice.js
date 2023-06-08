import { createSlice } from "@reduxjs/toolkit";

// A Redux slice for managing the state of the surveys
export const CopySlice = createSlice({
  name: "copy",
  initialState: [],
  reducers: {
    loadData: (state, action) => {
      const question = action.payload;
      return state = question;
    },
  },
});

// Export the action creators from the surveySlice
export const {
  loadData,

} = CopySlice.actions;

// Export the surveySlice reducer
export default CopySlice.reducer;