import { createSlice } from "@reduxjs/toolkit";

// A Redux slice for managing the state of the surveys
export const UserSlice = createSlice({
  name: "Users",
  initialState: [],
  reducers: {

    loadUsers: (state, action) => {
      const users = action.payload;
      let newUsers = [];
      let isAlreadyinStore = false;
      // Iterate through the users to be loaded
      for (let user of users) {
        // Check if the user is already present in the state
        for (let use of state) {
          if (user.id === use.id) {
            isAlreadyinStore = true;
            // console.log(`User "${user.name}" is already loaded`);
          }
        }
        if (!isAlreadyinStore) {
          newUsers = [...newUsers, user];
        }
      }
      state.push(...newUsers);
      console.log("Users are already loaded");
    },
  },
});

// Export the action creators from the surveySlice
export const {
  loadUsers,

} = UserSlice.actions;

// Export the surveySlice reducer
export default UserSlice.reducer;