import { authorizedFetch } from './authorizedFetch';

const QuestionUpdateMutationJSON = (lastchange,id,name,order) => ({
  query: `
  mutation {
    questionUpdate(
      question: {
        lastchange: "${lastchange}", 
        id: "${id}", 
        name: "${name}",  
        order: ${order}}
    ) {
      id
      msg
      question{
      lastchange
      }
    }
  }
  `
});

export const QuestionUpdateMutation = (props) => 
  authorizedFetch('/gql', {
    body: JSON.stringify(QuestionUpdateMutationJSON(props.lastchange,props.id,props.name,props.order))
  })
