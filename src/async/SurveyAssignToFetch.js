import { SurveyAssignToMutation } from 'queries/SurveyAssignToMutation';
import { surveyAssignTo } from 'features/SurveySlice';

  /**
 * An asynchronous action creator that fetches projects and dispatches the 'loadProjects' action.
 *
 * @returns {Function} A function that accepts the 'dispatch' and 'getState' functions from Redux.
 */


export const SurveyAssignToFetch = (props) => (dispatch, getState) => {

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
};


