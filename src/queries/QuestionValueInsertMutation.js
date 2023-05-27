import { authorizedFetch } from './authorizedFetch';

const QuestionValueInsertJSON = (questionId,name,order) => ({
  query: `
  mutation {
    questionValueInsert(questionValue:{
      questionId:"${questionId}",
      name:"${name}",
      order: ${order}
    }){
      id
      msg
      question
      {
        id
        lastchange
      }
    }
  }
  `
});

export const QuestionValueInsertMutation = (props) => 
  authorizedFetch('/gql', {
    body: JSON.stringify(QuestionValueInsertJSON(props.questionId,props.name,props.order))
  })
