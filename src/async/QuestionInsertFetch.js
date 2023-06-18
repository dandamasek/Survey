import { QuestionInsertMutation } from '../queries/QuestionInsertMutation';
import { addQuestion } from 'features/SurveySlice';

  /**
 * 
 *
 * @returns {Function} 
 */


export const QuestionInsertFetch = (props) => (dispatch, getState) => {
  console.log("HEEELP",props)
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
