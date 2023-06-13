import { authorizedFetch } from '../queries/authorizedFetch';

/**
 * 
 * Function that returns the GroupPageQuery in JSON format.
 */
export const groupPageQueryJSON = () => ({
  query: `
    {
      groupPage {
        id
        name
      }
    }
  `,
});

/**
 * Sends the GroupPageQuery to the server using authorizedFetch.
 */
export const groupPageQuery = () =>
  authorizedFetch('/gql', {
    body: JSON.stringify(groupPageQueryJSON()),
  });