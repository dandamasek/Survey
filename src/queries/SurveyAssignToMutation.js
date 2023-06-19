import { authorizedFetch } from './authorizedFetch';

/**
 * Generates the JSON object for the SurveyAssignToMutation.
 * @param {string} surveyId - ID of the survey to assign
 * @param {string} userId - ID of the user to assign the survey to
 * @returns {Object} - JSON object for the mutation
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


/**
 * Sends a mutation request to assign a survey to a user.
 * @param {Object} props - Mutation properties
 * @param {string} props.surveyId - ID of the survey to assign
 * @param {string} props.userId - ID of the user to assign the survey to
 * @returns {Promise} - Promise with the mutation result
 */
export const SurveyAssignToMutation = (props) =>
authorizedFetch('/gql', {
body: JSON.stringify(SurveyAssignToMutationJSON(props.surveyId, props.userId))
});

