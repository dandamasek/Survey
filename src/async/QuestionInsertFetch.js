import { QuestionInsertMutation } from '../queries/QuestionInsertMutation';
import { addQuestion } from 'features/SurveySlice';

  /**
 * 
 *
 * @returns {Function} 
 */


export const QuestionInsertFetch = (props) => (dispatch, getState) => {
    
    props.questions.forEach((question) => {
      question.answers.forEach((answer) => {
        if (answer.user.id === props.currentUser.id) {
          
            QuestionInsertMutation({name: props.name, surveyId: props.surveyId, typeId: props.type, order: props.orderLength + 1})
            .then(response => response.json())
            .then(json => {
            const newQuestion = json.data?.questionInsert.question;
    
            if (newQuestion) {
                dispatch(addQuestion(newQuestion));
                console.log('Question "' + { name: newQuestion } + '" was created on the server');
            }
            return json
            })
        }
      })  
    })
};
