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
    }
  }
  `
});

export const questionInsertMutation = (name, surveyId, typeId, order) => 
  authorizedFetch('/gql', {
    body: JSON.stringify(questionInsertMutationJSON(name, surveyId, typeId, order)),
  })
