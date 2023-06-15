import { SurveyUpdateMutation } from 'queries/SurveyUpdateMutation';
import { updateSurveyName } from 'features/SurveySlice';
  /**
 * An asynchronous action creator that fetches projects and dispatches the 'loadProjects' action.
 *
 * @returns {Function} A function that accepts the 'dispatch' and 'getState' functions from Redux.
 */

export const SurveyUpdateFetch = (props) => (dispatch, getState) => {
  // Call the ProjectsQuery function to fetch projects
  SurveyUpdateMutation(props)
    .then(response => response.json())
    .then(json => {
      // Extract the projects data from the JSON response
      const survey = json.data?.surveyUpdate.survey;

      if (survey) {
        // Dispatch the 'loadProjects' action with the fetched projects
        dispatch(updateSurveyName(survey));
        console.log('New survey "'+survey.name+'" is updated on server')
        

      }
      return json
    })
};
