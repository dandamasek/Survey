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
      }
    }
  }
  `
});

export const QuestionUpdateMutation = (props) => 
  authorizedFetch('/gql', {
    body: JSON.stringify(QuestionUpdateMutationJSON(props.lastchange,props.id,props.name,props.order,props.type))
  })
