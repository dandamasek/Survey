import { authorizedFetch } from '../queries/authorizedFetch';

/**
 * Function that returns the SurveySelectQueryJSON in JSON format.
 * @returns {Object} - JSON object for the survey select query
 */
export const SurveySelectQueryJSON = () => ({
  "query": `{
          surveyPage {
            id
            name
            lastchange
            questions {
              id
              name
              order
              type{
                id
                name
              }
              values{
              name
              id
              lastchange
              order
              }
              lastchange
              answers {
                id
                value
                aswered
                expired
                lastchange
                user {
                  id
                  email
                }
              }
            }
          }
        }`
});

/**
 * Sends a query request to retrieve survey data.
 * @returns {Promise} - Promise with the survey query result
 */
export const SurveySelectQuery = () => authorizedFetch('/gql', {
  body: JSON.stringify(SurveySelectQueryJSON())
});