import { createSlice } from "@reduxjs/toolkit";

/**
 * Redux slice for managing the state of the groups.
 */
export const GroupSlice = createSlice({
  name: "groups",
  initialState: [],
  reducers: {
    /**
     * Action to load groups into the state.
     * @param {Array} state - The current state.
     * @param {Object} action - The action object containing the payload.
     */
    loadGroups: (state, action) => {
      const groups = action.payload;
      groups.forEach((group) => {
        const existingGroup = state.find((g) => g.id === group.id);
        if (!existingGroup) {
          state.push(group);
        }
      });
      console.log("Groups are already loaded");
    },
  },
});

/**
 * Action creators exported from the GroupSlice.
 */
export const { loadGroups } = GroupSlice.actions;

/**
 * Reducer exported from the GroupSlice.
 */
export default GroupSlice.reducer;
