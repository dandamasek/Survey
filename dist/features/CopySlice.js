import { createSlice } from "@reduxjs/toolkit";

/**
 * Redux slice for managing the state of the surveys.
 */
export const CopySlice = createSlice({
  name: "copy",
  initialState: [],
  reducers: {
    /**
     * Action to load data into the copy state.
     * @param {Array} state - The current state.
     * @param {Object} action - The action object containing the payload.
     * @returns {Array} - The updated state.
     */
    loadData: (state, action) => {
      const question = action.payload;
      return state = question;
    }
  }
});

/**
 * Action creators exported from the CopySlice.
 */
export const {
  loadData
} = CopySlice.actions;

/**
 * Reducer exported from the CopySlice.
 */
export default CopySlice.reducer;