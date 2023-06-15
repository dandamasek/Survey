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
          name
          questions{
            id
            name
            answers{
              id
              user{
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

