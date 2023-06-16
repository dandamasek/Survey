import { createSlice } from "@reduxjs/toolkit";

/*
A Redux slice for managing the state of the groups
*/
export const GroupSlice = createSlice({
  name: "groups",
  initialState: [],
  reducers: {
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

export const { loadGroups } = GroupSlice.actions;

/*
Export the GroupSlice reducer
*/
export default GroupSlice.reducer;