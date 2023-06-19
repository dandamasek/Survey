import { updateAnswerValue } from 'features/SurveySlice';
import { AnswerValueMutation } from '../queries/AnswerValueMutation';

/**
 * Action creator function to fetch and update answer values.
 * @param {Object} props - The component props.
 * @returns {Function} - The async action function.
 */

export const AnswerValueUpdateFetch = (props) => (dispatch, getState) => (
    AnswerValueMutation(props)
      .then(response => response.json())
      .then(json => {
        const answer = json.data?.answerUpdate.answer;

        if (answer) {
            dispatch(updateAnswerValue({answer}));
            console.log('AnswerValue "'+answer.value+'"is updated on server');
        }
  
        return json
      })
);
