const globalFetchParams = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  // *default, no-cache, reload, force-cache, only-if-cached
  cache: 'no-cache',
  redirect: 'follow' // manual, *follow, error
};

/**
 * Encapsulation function for fetch, creates an intermediate layer for communication with the server.
 * Allows overwriting default parameters (globalFetchParams).
 * @param {string} path - The server path for the fetch request.
 * @param {Object} params - Additional parameters to override the default fetch parameters.
 * @returns {Promise} - Promise with the fetch request.
 */
export const authorizedFetch = (path, params) => {
  const newParams = {
    ...globalFetchParams,
    ...params
  };
  const overridenPath = '/api/gql';
  return fetch(overridenPath, newParams);
};