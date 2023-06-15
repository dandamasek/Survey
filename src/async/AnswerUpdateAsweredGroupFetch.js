import { AnswerUpdateAsweredMutation } from '../queries/AnswerUpdateAsweredMutation';
import { updateAnswerAswered } from 'features/SurveySlice';

  /**
 * 
 *
 * @returns {Function} 
 */


export const AnswerUpdateAsweredGroupFetch = (props) => (dispatch, getState) => {
    
    props.questions.forEach((question) => {
      question.answers.forEach((answer) => {
        if (answer.user.id === props.currentUser.id) {
          
            AnswerUpdateAsweredMutation({id: answer.id , lastchange: answer.lastchange, aswered: props.aswered})
            .then(response => response.json())
            .then(json => {
            const answer = json.data?.answerUpdate.answer;
    
            if (answer) {
                dispatch(updateAnswerAswered(answer))
                console.log('Answer with value: "'+answer.value+'" is closed')
            }
            return json
            })
        }
      })  
    })


   
};