import { authorizedFetch } from './authorizedFetch';

const QuestionUpdateMutationJSON = (lastchange,id,name,order,type) => ({
  query: `
  mutation {
    questionUpdate(
      question: {
        lastchange: "${lastchange}", 
        id: "${id}", 
        name: "${name}",  
        order: ${order},
        typeId: "${type}"
      }
    ) {
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
        id
        name
      }
      }
    }
  }
  `
});

export const QuestionUpdateMutation = (lastchange,id,name,order,type) => 
  authorizedFetch('/gql', {
    body: JSON.stringify(QuestionUpdateMutationJSON(lastchange,id,name,order,type))
  })
