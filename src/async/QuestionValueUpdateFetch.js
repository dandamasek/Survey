import { QuestionValueUpdateMutation } from 'queries/QuestionValueUpdateMutation';
import { updateQuestionValues } from 'features/SurveySlice';


export const QuestionValueUpdateFetch = (props) => (dispatch, getState) => {
    // Call the ProjectsQuery function to fetch projects
    console.log('QuestionValueUpdateFetch called',props);
    QuestionValueUpdateMutation({lastchange: props.lastchange, id: props.id, name: props.name, order: props.order})
      .then(response => response.json())
      .then(json => {
        // Extract the projects data from the JSON response
        const question = json.data?.questionValueUpdate.question;

        if (question) {
            console.log('QuestionValue "' + question.name + '" updated on server');
            dispatch(updateQuestionValues(question));
        }
  
        return json
      })
  };


 