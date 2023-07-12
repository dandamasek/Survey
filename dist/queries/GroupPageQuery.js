import { authorizedFetch } from '../queries/authorizedFetch';

/**
 * Generates the JSON object for the GroupPageQuery.
 * @returns {Object} - JSON object for the query
 */
export const groupPageQueryJSON = () => ({
  query: `
  
  {
    groupPage {
      id
      name
      memberships 
        {user
          {name
            id
          }
        } 
      }
    }
  `
});

/**
 * Sends the GroupPageQuery to the server using authorizedFetch.
 * @returns {Promise} - Promise with the query result
 */
export const groupPageQuery = () => authorizedFetch('/gql', {
  body: JSON.stringify(groupPageQueryJSON())
});