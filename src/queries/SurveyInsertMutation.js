import { authorizedFetch } from './authorizedFetch';

// zatím fixní typeId = hodnocení výuky "712029b6-2dbc-4952-9d3e-e897899edf0a"
const SurveyInsertMutationJSON = (name, typeId) => ({
  query: `
  mutation {
    surveyInsert(
      survey: {
        name: "${name}", 
        typeId: "${typeId}"}
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
  }
  `
});

export const SurveyInsertMutation = (props) => 
  authorizedFetch('/gql', {
    body: JSON.stringify(SurveyInsertMutationJSON(props.name, props.typeId))
  })

