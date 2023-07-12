import { authorizedFetch } from './authorizedFetch';

// zatím fixní typeId = hodnocení výuky "712029b6-2dbc-4952-9d3e-e897899edf0a"

/**
 * Function that returns the SurveyInsertMutationJSON in JSON format.
 * @param {string} name - The name of the survey
 * @param {string} typeId - The ID of the survey type
 * @returns {Object} - JSON object for the survey insert mutation
 */
const SurveyInsertMutationJSON = (name, typeId) => ({
  query: `
  mutation(
    $name: String!,
    $typeId: ID,
  ) {
    surveyInsert(
      survey: {
        name: $name, 
        typeId: $typeId}
    ) {
      msg
      id
      survey {
        id
        lastchange
        name
        questions {
          id
          lastchange
          name
          order
          answers {
            id
            lastchange
            value
            aswered
            expired
            user {
              id
              name
              email
            }
          }
        }
      }
    }
  } `,
  variables: {
    name: name,
    typeId: typeId
  }
});

/**
 * Sends a mutation request to insert a new survey.
 * @param {Object} props - Object containing the name and typeId of the survey
 * @returns {Promise} - Promise with the survey insert mutation result
 */
export const SurveyInsertMutation = props => authorizedFetch('/gql', {
  body: JSON.stringify(SurveyInsertMutationJSON(props.name, props.typeId))
});