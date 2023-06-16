import { updateAnswerValue } from 'features/SurveySlice';
import { AnswerValueMutation } from '../queries/AnswerValueMutation';

export const AnswerValueUpdateFetch = (props) => (dispatch, getState) => {
    // Call the ProjectsQuery function to fetch projects
    AnswerValueMutation(props)
      .then(response => response.json())
      .then(json => {
        // Extract the projects data from the JSON response
        const answer = json.data?.answerUpdate.answer;

        if (answer) {
            dispatch(updateAnswerValue({answer}));
            console.log('AnswerValue "'+answer.value+'"is updated on server');
        }
  
        return json
      })
  };
