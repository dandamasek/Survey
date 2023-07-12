import { QuestionValueInsertMutation } from 'queries/QuestionValueInsertMutation';
import { insertQuestionValues } from 'features/SurveySlice';

/**
 * Action creator function to insert a new question value and fetch the updated question.
 * @param {Object} props - The component props.
 * @returns {Function} - The async action function.
 */

export const QuestionValueInsertFetch = props => (dispatch, getState) =>
/*
Call the QuestionValueInsertMutation function to insert the new question value
*/
QuestionValueInsertMutation({
  questionId: props.questionId,
  nameValue: props.nameValue,
  order: props.order
}).then(response => response.json()).then(json => {
  const question = json.data?.questionValueInsert.question;
  if (question) {
    dispatch(insertQuestionValues(question));
    console.log('New questionValue "' + question.name + '" inserted on server');
  }
  return json;
});