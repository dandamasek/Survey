import { SurveySelectQuery }  from '../queries/SurveyGroupQuery';
import { loadData } from '../features/SurveySlice';


/**
 * An asynchronous action creator that fetches projects and dispatches the 'loadProjects' action.
 *
 * @returns {Function} A function that accepts the 'dispatch' and 'getState' functions from Redux.
 */
export const SurveyFetchAsync = () => (dispatch, getState) => {
  // Call the ProjectsQuery function to fetch projects
  SurveySelectQuery()
    .then(response => response.json())
    .then(json => {
      // Extract the projects data from the JSON response
      const surveys = json.data?.surveyPage
      const users = json.data?.use
      if (surveys) {
        // Dispatch the 'loadProjects' action with the fetched projects
        dispatch(loadData(surveys))
      }
      return json
    })
}