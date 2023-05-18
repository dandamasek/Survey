import { authorizedFetch } from '../queries/authorizedFetch'

/**
 * Funkce
 *  
 */
export const GroupsSelectQueryJSON = () => ({
    "query":
        `query {
            surveyPage{
              id,
              name,
              questions {
                id
                name
                order
                answers {
                  id
                  value
                  aswered
                  expired
                }
              }
             
            }
        }`
})

/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 */

export const GroupsSelectQuery = () =>
    authorizedFetch('/gql', {
        body: JSON.stringify(GroupsSelectQueryJSON()),
    })