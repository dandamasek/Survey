import { updateAnswerExpired } from 'features/SurveySlice';
import {AnswerUpdateExpiredMutation} from '../queries/AnswerUpdateExpiredMutation';



export const AnswerExpiredFetch = (props) => (dispatch, getState) => {
  
  props.questions.forEach((question) => {
    question.answers.forEach((answer) => {

      AnswerUpdateExpiredMutation({id: answer.id, lastchange: answer.lastchange, expired: true})
        .then(response => response.json())
        .then(json => {
          // Extract the projects data from the JSON response
          const newAnswer = json.data?.answerUpdate.answer;
          
          if (newAnswer) {
            dispatch(updateAnswerExpired({answer: newAnswer}));
            console.log('Answer closed on server')
          }
    
          return json
        })  

    });
  });


 



  };