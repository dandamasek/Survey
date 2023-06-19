import { authorizedFetch } from './authorizedFetch';
/*
Function that returns the SurveyAssignToMutationJSON in JSON format.
*/
const SurveyAssignToMutationJSON = (surveyId,userId) => ({
  query: `
    mutation (
      $surveyId: ID!,
      $userId: ID!
    ) {
      surveyAssingTo( 
        surveyId: $surveyId,
        userId: $userId){
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
  `, 
  variables:{
    surveyId: surveyId,
    userId: userId
  }
  
});


/*
Sends a mutation request to assign a survey to a user.
*/
export const SurveyAssignToMutation = (props) =>
authorizedFetch('/gql', {
body: JSON.stringify(SurveyAssignToMutationJSON(props.surveyId, props.userId))
});

