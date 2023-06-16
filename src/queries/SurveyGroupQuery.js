import { authorizedFetch } from '../queries/authorizedFetch'

/**
 * Function that returns the SurveySelectQueryJSON in JSON format.
 */
export const SurveySelectQueryJSON = () => ({
    "query":
        `{
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
})

/*
 Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
*/
export const SurveySelectQuery = () =>
    authorizedFetch('/gql', {
        body: JSON.stringify(SurveySelectQueryJSON()),
    })