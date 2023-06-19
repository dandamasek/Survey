import { authorizedFetch } from './authorizedFetch';

const QuestionValueUpdateJSON = (lastchange,id,name,order) => ({
  query: `
  mutation(
    $lastchange: DateTime!,
    $id: ID!,
    $name: String,
    $order: Int,  
  ){

    questionValueUpdate(questionValue:
      {
        lastchange: $lastchange,
        id: $id,
        name: $name, 
        order: $order })
        {
          msg
          id
          question
            {
              id
              lastchange
              name
              order
            }
        }
  }`,
    variables:{
      lastchange: lastchange,
      id: id,
      name: name,
      order: order
    }
});
/*
Sends a mutation request to update a question value.
*/
export const QuestionValueUpdateMutation = (props) => 
  authorizedFetch('/gql', {
    body: JSON.stringify(QuestionValueUpdateJSON(props.lastchange, props.id, props.name ,props.order))
  })