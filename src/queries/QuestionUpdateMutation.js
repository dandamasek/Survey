import { authorizedFetch } from './authorizedFetch';
/*
Function that returns the QuestionUpdateMutationJSON in JSON format.
*/
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

/*
Sends a mutation request to update a question.
*/
export const QuestionUpdateMutation = (props) => 
  authorizedFetch('/gql', {
    body: JSON.stringify(QuestionUpdateMutationJSON(props.lastchange,props.id,props.name,props.order,props.type))
  })
