import { authorizedFetch } from './authorizedFetch';

const QuestionValueUpdateJSON = (lastchange,id,name,order) => ({
  query: `
  mutation {
    questionValueUpdate(questionValue:{
        lastchange:"${lastchange}",
        id:"${id}",
        name:"${name}", 
        order:${order}})
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
  }
  `
});

export const QuestionValueUpdateMutation = (props) => 
  authorizedFetch('/gql', {
    body: JSON.stringify(QuestionValueUpdateJSON(props.lastchange, props.id, props.name ,props.order))
  })
