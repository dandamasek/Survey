import { authorizedFetch } from './authorizedFetch';

/*
Function that returns the QuestionValueInsertJSON in JSON format.
*/
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
/*
Sends a mutation request to insert a new question value.
*/
export const QuestionValueInsertMutation = (props) => 
  authorizedFetch('/gql', {
    body: JSON.stringify(QuestionValueInsertJSON(props.questionId, props.nameValue, props.order))
  })