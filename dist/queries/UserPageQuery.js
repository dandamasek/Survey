import { authorizedFetch } from '../queries/authorizedFetch';

/**
 * Function that returns the UserSelectQuery in JSON format.
 * @returns {Object} - JSON object for the user select query
 */
export const UserSelectQueryJSON = () => ({
  query: `
    {
      userPage {
        id
        name
      }
    }
  `
});

/**
 * Sends the UserSelectQuery to the server using authorizedFetch.
 * @returns {Promise} - Promise with the user select query result
 */
export const UserSelectQuery = () => authorizedFetch('/gql', {
  body: JSON.stringify(UserSelectQueryJSON())
});