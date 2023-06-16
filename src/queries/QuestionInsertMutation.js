import { authorizedFetch } from './authorizedFetch';
/*
Function that returns the questionInsertMutationJSON in JSON format.
*/
const QuestionInsertMutationJSON = (name,surveyId,typeId,order) => ({
  query: `
  mutation {
    questionInsert (question:{
    name:"${name}",
    surveyId:"${surveyId}",
    typeId:"${typeId}",
    order:${order}
    }) {
      id
      msg
      question{
        id
        lastchange
        name
        order
        type {
          id
          name
        }
        values {
          name
        }
        survey{
          id
        }
        answers{
          id
          lastchange
          value
          aswered
          expired
          user{
            id
            name
          }
        }
        
      }
    }
  }
  `
});
/*
Sends a mutation request to insert a new question.
n*/

export const QuestionInsertMutation = (name, surveyId, typeId, order) => 
  authorizedFetch('/gql', {
    body: JSON.stringify(QuestionInsertMutationJSON(name, surveyId, typeId, order)),
  })
