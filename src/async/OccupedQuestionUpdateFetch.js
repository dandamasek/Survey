import { updateQuestion } from 'features/SurveySlice';
import {QuestionUpdateMutation} from '../queries/QuestionUpdateMutation';



export const OccupedQuestionUpdateFetchData = (props) => (dispatch, getState) => {

     // Call the ProjectsQuery function to fetch projects
    //  console.log('OccupedQuestionUpdateFetchData',props.occupiedQuestion);

    try {
    console.log('OccupedQuestionUpdateFetchData',props.occupiedQuestion);
    QuestionUpdateMutation({lastchange: props.occupiedQuestion.lastchange, id: props.occupiedQuestion.id, name : props.occupiedQuestion.name, order: props.preOrder , type: props.occupiedQuestion.type.id})
     .then(response => response.json())
     .then(json => {
       // Extract the projects data from the JSON response
       const question = json.data?.questionUpdate.question;

       if (question) {
         dispatch(updateQuestion({question,surveyId: props.surveyId}));
         console.log('Question 2 "'+question.name+'" updated on server')
       }
 
       return json
     })
    } catch (error) {
    
    }
  };