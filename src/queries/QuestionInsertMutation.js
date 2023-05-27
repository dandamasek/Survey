import { authorizedFetch } from './authorizedFetch';

const questionInsertMutationJSON = (name,surveyId,typeId,order) => ({
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

export const questionInsertMutation = (name, surveyId, typeId, order) => 
  authorizedFetch('/gql', {
    body: JSON.stringify(questionInsertMutationJSON(name, surveyId, typeId, order)),
  })
