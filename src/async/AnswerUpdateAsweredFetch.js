import { AnswerUpdateAsweredMutation } from '../queries/AnswerUpdateAsweredMutation';
import { updateAnswerAswered } from 'features/SurveySlice';

  /**
 * 
 *
 * @returns {Function} 
 */


export const AnswerUpdateAsweredFetch = (props) => (dispatch, getState) => {

    AnswerUpdateAsweredMutation({id: props.id , lastchange: props.lastchange, aswered: props.aswered})
        .then(response => response.json())
        .then(json => {
      
        const answer = json.data?.answerUpdate.answer;

        if (answer) {
            dispatch(updateAnswerAswered(answer))
            console.log('Answer with value: "'+answer.value+'" is closed')
        }
        return json
        })
};