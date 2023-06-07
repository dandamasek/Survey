import { loadUsers } from '../features/UserSlice';
import { UserSelectQuery } from '../queries/UserPageQuery';

/**
 * An asynchronous action creator that fetches users and dispatches the 'loadUsers' action.
 *
 * @returns {Function} A function that accepts the 'dispatch' and 'getState' functions from Redux.
 */
export const fetchUsers = () => (dispatch, getState) => {
  // Call the UserSelectQuery function to fetch users
  UserSelectQuery()
    .then(response => response.json())
    .then(json => {
      // Extract the users data from the JSON response
      const users = json.data?.userPage;
      if (users) {
        // Dispatch the 'loadUsers' action with the fetched users
        dispatch(loadUsers(users));
      }
      return json;
    });
};