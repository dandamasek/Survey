import { SurveySelectQuery } from '../queries/SurveyGroupQuery';
import { loadData } from '../features/SurveySlice';

/**
 * An asynchronous action creator that fetches projects and dispatches the 'loadProjects' action.
 *
 * @returns {Function} A function that accepts the 'dispatch' and 'getState' functions from Redux.
 */

export const SurveyFetchAsync = () => (dispatch, getState) =>
/*
Call the ProjectsQuery function to fetch projects and extract the projects data from the JSON response
*/
SurveySelectQuery().then(response => response.json()).then(json => {
  const surveys = json.data?.surveyPage;
  if (surveys) {
    /*
    Dispatch the 'loadProjects' action with the fetched projects
    */
    dispatch(loadData(surveys));
  }
  return json;
});