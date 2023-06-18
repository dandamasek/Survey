import { QuestionInsertMutation } from '../queries/QuestionInsertMutation';
import { addQuestion } from 'features/SurveySlice';

/**
 * Action creator function to insert a new question and fetch the updated question.
 * @param {Object} props - The component props.
 * @returns {Function} - The async action function.
 */

export const QuestionInsertFetch = (props) => (dispatch, getState) => {
  /*
  Call the QuestionInsertMutation function to insert the new question
  */
  QuestionInsertMutation({name: props.name, surveyId: props.surveyId, typeId: props.type, order: props.order})
  .then(response => response.json())
  .then(json => {
  const newQuestion = json.data?.questionInsert.question;

  if (newQuestion) {
      dispatch(addQuestion(newQuestion));
      console.log('Question "' + { name: newQuestion } + '" was created on the server');
  }
  return json
  })

};
