import { createSlice } from "@reduxjs/toolkit";

/**
 * Redux slice for managing the state of the users.
 */
export const UserSlice = createSlice({
  name: "Users",
  initialState: [],
  reducers: {
    /**
     * Action to load users into the state.
     * @param {Array} state - The current state of users.
     * @param {Object} action - The action object.
     * @param {Array} action.payload - The array of users to be loaded.
     */
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
    }
  }
});

// Export the action creators from the userSlice
export const {
  loadUsers
} = UserSlice.actions;

// Export the userSlice reducer
export default UserSlice.reducer;