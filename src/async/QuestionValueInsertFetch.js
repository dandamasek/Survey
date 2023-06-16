
import { QuestionValueInsertMutation } from 'queries/QuestionValueInsertMutation';
import { insertQuestionValues } from 'features/SurveySlice';


export const QuestionValueInsertFetch = (props) => (dispatch, getState) => {
    QuestionValueInsertMutation({
      questionId: props.questionId,
      nameValue: props.nameValue,
      order: props.order
    })
      .then(response => response.json())
      .then(json => {
        // Extract the projects data from the JSON response
        const question = json.data?.questionValueInsert.question;

        if (question) {
        // Dispatch action to insert the new question value
        dispatch(insertQuestionValues(question));
        console.log('New questionValue "' + question.name + '" inserted on server');
        }
  
        return json
      })
  };