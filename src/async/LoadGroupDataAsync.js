import { loadGroups } from '../features/GroupSlice';
import { groupPageQuery } from '../queries/GroupPageQuery';

/**
 * An asynchronous action creator that fetches projects and dispatches the 'loadProjects' action.
 *
 * @returns {Function} A function that accepts the 'dispatch' and 'getState' functions from Redux.
 */
export const fetchGroups = () => (dispatch) => {
     /*
     Call the groupPageQuery function to fetch users
     */
    groupPageQuery()
      .then((response) => response.json())
      .then((json) => {
        //console.log("GroupPageQuery response:", json); // Log the response for debugging purposes
        /*
        Extract the groups data from the JSON response
        */
        const groups = json.data?.groupPage;
        if (groups) {
           /*
           Dispatch the 'loadGroups' action with the fetched users
           */
          dispatch(loadGroups(groups));
        }
        return json;
      })
      .catch((error) => {
        console.log("Failed to fetch groups:", error);
      });
  };