import { AnswerUpdateAsweredMutation } from '../queries/AnswerUpdateAsweredMutation';
import { addSurvey } from 'features/SurveySlice';

  /**
 * 
 *
 * @returns {Function} 
 */


export const AnswerUpdateAsweredFetch = (props) => (dispatch, getState) => {

    AnswerUpdateAsweredMutation({id: props.id , lastchange: props.lastchanged, answered: props.answered})
        .then(response => response.json())
        .then(json => {
      
        const answer = json.data?.answerUpdate.answer;

        if (answer) {

            // dispatch(addSurvey(survey))
            console.log('New survey"'+answer+'" insert on server')
        }
        return json
        })
};