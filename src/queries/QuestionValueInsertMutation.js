import { authorizedFetch } from './authorizedFetch';

// create new questionValue on server without name
const QuestionValueInsertJSON = (questionId,nameValue,order) => ({
  query: `
  mutation {
    questionValueInsert(questionValue:{
      questionId:"${questionId}",
      name:"${nameValue}",
      order: ${order}
    }){
      msg
      id
      question
      {
        id
        lastchange
        name
        nameEn
        order
        question {
          id
          lastchange
          name
          order        
         
        }
      }
    }
  }
  `
});

export const QuestionValueInsertMutation = (props) => 
  authorizedFetch('/gql', {
    body: JSON.stringify(QuestionValueInsertJSON(props.questionId, props.nameValue, props.order))
  })