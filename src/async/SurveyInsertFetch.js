import { SurveyInsertMutation } from 'queries/SurveyInsertMutation';
import { addSurvey } from 'features/SurveySlice';

  /**
 * An asynchronous action creator that fetches projects and dispatches the 'loadProjects' action.
 *
 * @returns {Function} A function that accepts the 'dispatch' and 'getState' functions from Redux.
 */

export const FetchData = (props) => (dispatch, getState) => {
  // Call the ProjectsQuery function to fetch projects
  SurveyInsertMutation({name: props.name , typeId: props.type})
    .then(response => response.json())
    .then(json => {
      // Extract the projects data from the JSON response
      const survey = json.data?.surveyInsert.survey;

      if (survey) {
        // Dispatch the 'loadProjects' action with the fetched projects
        dispatch(addSurvey(survey))
        console.log('New survey"'+survey.data+'" insert on server')
      }
      return json
    })
};