import { loadGroups } from '../features/GroupSlice';
import { groupPageQuery } from '../queries/GroupPageQuery';

/**
 * Action creator function to fetch groups.
 * @returns {Function} - The async action function.
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