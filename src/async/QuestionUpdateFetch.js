import { updateQuestion } from 'features/SurveySlice';
import {QuestionUpdateMutation} from '../queries/QuestionUpdateMutation';



export const FetchData = (props) => (dispatch, getState) => {
    // Call the ProjectsQuery function to fetch projects
    QuestionUpdateMutation({lastchange: props.lastchange, id: props.id,name : props.name, order: props.order, type: props.type})
      .then(response => response.json())
      .then(json => {
        // Extract the projects data from the JSON response
        const question = json.data?.questionUpdate.question;

        if (question) {
          dispatch(updateQuestion({question,surveyId: props.surveyId}));
          console.log('Question "'+question.name+'" updated on server')
        }
  
        return json
      })
  };