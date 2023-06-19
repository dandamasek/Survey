import { authorizedFetch } from './authorizedFetch';

// zatím fixní typeId = hodnocení výuky "712029b6-2dbc-4952-9d3e-e897899edf0a"

/**
 * Function that returns the SurveyInsertMutationJSON in JSON format.
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

/*
Sends a mutation request to insert a new survey.
*/
export const SurveyInsertMutation = (props) =>
authorizedFetch('/gql', {
body: JSON.stringify(SurveyInsertMutationJSON(props.name, props.typeId))
});

