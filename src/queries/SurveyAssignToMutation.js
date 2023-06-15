import { authorizedFetch } from './authorizedFetch';
//Assigns user to survey 
const SurveyAssignToMutationJSON = (surveyId,userId) => ({
  query: `
    mutation {
      surveyAssingTo( 
        surveyId: "${surveyId}",
        userId:"${userId}"){
        id
        msg
        survey {
          id
          lastchange
          name
          questions {
            id
            lastchange
            name
            order
            type {
              id
              name
            }
            values {
              id
              lastchange
              name
              order
            }
            answers {
              id
              lastchange
              value
              aswered
              expired
              user {
                id
                name
              }
            }
          }
        }
      }
    }
  `
  
});

export const SurveyAssignToMutation = (props) =>
  authorizedFetch('/gql', {
    body: JSON.stringify(SurveyAssignToMutationJSON(props.surveyId, props.userId))
  })

