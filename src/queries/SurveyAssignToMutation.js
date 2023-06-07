import { authorizedFetch } from './authorizedFetch';
//Assigns user to survey 
const GroupsSelectQueryJSON = (surveyId,userId) => ({
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
    body: JSON.stringify(GroupsSelectQueryJSON(props.surveyId, props.userId))
  })

