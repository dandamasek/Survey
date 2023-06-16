import { updateQuestion } from 'features/SurveySlice';
import {QuestionUpdateMutation} from '../queries/QuestionUpdateMutation';


/*
Call the ProjectsQuery function to fetch projects and extract the projects data from the JSON response
*/
export const FetchData = (props) => (dispatch, getState) => {
    
    QuestionUpdateMutation({lastchange: props.lastchange, id: props.id,name : props.name, order: props.order, type: props.type})
      .then(response => response.json())
      .then(json => {
  
        const question = json.data?.questionUpdate.question;

        if (question) {
          dispatch(updateQuestion({question,surveyId: props.surveyId}));
          console.log('Question "'+question.name+'" updated on server')
        }
  
        return json
      })
  };