import { QuestionValueUpdateMutation } from 'queries/QuestionValueUpdateMutation';
import { updateQuestionValues } from 'features/SurveySlice';

/**
 * Action creator function to update a question value and fetch the updated question.
 * @param {Object} props - The component props.
 * @returns {Function} - The async action function.
 */

export const QuestionValueUpdateFetch = (props) => (dispatch, getState) => {
  /*
  Call the QuestionValueUpdateMutation function to update the question value
  */
    QuestionValueUpdateMutation({lastchange: props.lastchange, id: props.id, name: props.name, order: props.order})
      .then(response => response.json())
      .then(json => {
        const question = json.data?.questionValueUpdate.question;

        if (question) {
            console.log('QuestionValue "' +question.name+ '" updated on server');
            dispatch(updateQuestionValues(question));
        }
  
        return json
      })
  };
