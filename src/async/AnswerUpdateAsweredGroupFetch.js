import { AnswerUpdateAsweredMutation } from '../queries/AnswerUpdateAsweredMutation';
import { updateAnswerAswered } from 'features/SurveySlice';

 /**
 * Updates the answered status of answers belonging to a specific user and group through API requests.
 * @param {Object} props - The component props.
 * @param {Array} props.questions - The list of questions containing the answers.
 * @param {Object} props.currentUser - The user object.
 * @param {boolean} props.answered - The new answered status of the answers.
 * @returns {Function} - The async action function.
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