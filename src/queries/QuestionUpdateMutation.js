import { authorizedFetch } from './authorizedFetch';
/*
Function that returns the QuestionUpdateMutationJSON in JSON format.
*/
const QuestionUpdateMutationJSON = (lastchange,id,name,order,type) => ({
  query: `
  mutation(
    $lastchange: DateTime!, 
    $id: ID!, 
    $name: String,
    $order: Int,
    $typeId: ID,
  ) {
    questionUpdate(
      question: {
        lastchange: $lastchange, 
        id: $id, 
        name: $name,  
        order: $order,
        typeId: $typeId,
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
  }`,
  variables: {
    lastchange: lastchange,
    id: id,
    name: name,
    order : order,
    typeId: type,
  },
});

/*
Sends a mutation request to update a question.
*/
export const QuestionUpdateMutation = (props) => 
  authorizedFetch('/gql', {
    body: JSON.stringify(QuestionUpdateMutationJSON(props.lastchange,props.id,props.name,props.order,props.type))
  })
