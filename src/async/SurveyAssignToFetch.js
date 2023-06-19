import { SurveyAssignToMutation } from 'queries/SurveyAssignToMutation';
import { surveyAssignTo } from 'features/SurveySlice';

 /**
 * Action creator function to assign a user to a survey and fetch the updated survey.
 * @param {Object} props - The component props.
 * @returns {Function} - The async action function.
 */


export const SurveyAssignToFetch = (props) => (dispatch, getState) => (

  SurveyAssignToMutation({userId: props.userId, surveyId: props.surveyId})
    .then(response => response.json())
    .then(json => {
      // Extract the projects data from the JSON response
      const survey = json.data?.surveyAssingTo.survey;
      if (survey) {
        
        dispatch(surveyAssignTo(survey));
        console.log('User assigned to survey: "'+survey.name+'"');
      }
      return json
      })
);


