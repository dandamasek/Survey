import { AnswerUpdateAsweredMutation } from '../queries/AnswerUpdateAsweredMutation';
import { updateAnswerAswered } from 'features/SurveySlice';

/**
 * Updates the answered status of an answer through an API request.
 * @param {Object} props - The component props.
 * @param {string} props.id - The ID of the answer.
 * @param {string} props.lastchange - The last change timestamp of the answer.
 * @param {boolean} props.answered - The new answered status of the answer.
 * @returns {Function} - The async action function.
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