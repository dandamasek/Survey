import { updateQuestion } from 'features/SurveySlice';
import {QuestionUpdateMutation} from '../queries/QuestionUpdateMutation';

/**
 * Action creator function to update an occupied question's data and fetch projects.
 * @param {Object} props - The component props.
 * @returns {Function} - The async action function.
 */

export const OccupedQuestionUpdateFetchData = (props) => (dispatch, getState) => {

     /*
     Call the ProjectsQuery function to fetch projects and extract the projects data from the JSON response
     */
    try {
    QuestionUpdateMutation({lastchange: props.occupiedQuestion.lastchange, id: props.occupiedQuestion.id, name : props.occupiedQuestion.name, order: props.preOrder , type: props.occupiedQuestion.type.id})
     .then(response => response.json())
     .then(json => {
       const question = json.data?.questionUpdate.question;

       if (question) {
         dispatch(updateQuestion({question,surveyId: props.surveyId}));
         console.log('Question with occupied order: "'+question.name+'" updated on server')
       }
 
       return json
     })
    } catch (error) {
    
    }
  };