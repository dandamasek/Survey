import { authorizedFetch } from '../queries/authorizedFetch';

/**
 * Function that returns the UserSelectQuery in JSON format.
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

/*
  Sends the UserSelectQuery to the server using authorizedFetch.
 */

export const UserSelectQuery = () =>
    authorizedFetch('/gql', {
        body: JSON.stringify(UserSelectQueryJSON()),
    })