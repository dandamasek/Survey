import { authorizedFetch } from './authorizedFetch';
//Assigns user to survey 
const surveyAssignToMutationJSON = (surveyId,userId) => ({
  query: `
    mutation {
      surveyAssingTo( 
        surveyId: "${surveyId}",
        userId:"${userId}"){
        id
        msg
      }
    }
  `
  
});

export const surveyAssignToMutation = (props) => 
  authorizedFetch('/gql', {
    body: JSON.stringify(surveyAssignToMutationJSON(props.surveyId, props.userId))
  })

