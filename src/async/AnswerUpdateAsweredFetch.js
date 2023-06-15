import { AnswerUpdateAsweredMutation } from '../queries/AnswerUpdateAsweredMutation';
import { addSurvey } from 'features/SurveySlice';

  /**
 * 
 *
 * @returns {Function} 
 */


export const AnswerUpdateAsweredFetch = (props) => (dispatch, getState) => {
    console.log("hilge",props)

    AnswerUpdateAsweredMutation({id: props.id , lastchange: props.lastchange, aswered: props.aswered})
        .then(response => response.json())
        .then(json => {
      
        const answer = json.data?.answerUpdate.answer;

        if (answer) {
            // dispatch(addSurvey(survey))
            console.log('Answer: "'+answer+'" is closed')
        }
        return json
        })
};