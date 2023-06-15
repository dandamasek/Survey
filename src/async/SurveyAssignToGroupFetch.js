import { SurveyAssignToMutation } from 'queries/SurveyAssignToMutation';
import { surveyAssignTo } from 'features/SurveySlice';

  /**
 * An asynchronous action creator that fetches projects and dispatches the 'loadProjects' action.
 *
 * @returns {Function} A function that accepts the 'dispatch' and 'getState' functions from Redux.
 */


export const SurveyAssignToGroupFetch = (props) => (dispatch, getState) => {

  const group = props.groups.find((group) => group.id === props.group.id);
  if (group) {
    for (const user of group.memberships) {
  // Call the ProjectsQuery function to fetch projects

  SurveyAssignToMutation({userId: user.user.id, surveyId: props.surveyId})
    .then(response => response.json())
    .then(json => {
      // Extract the projects data from the JSON response
      const survey = json.data?.surveyAssingTo.survey;
      if (survey) {
        
        dispatch(surveyAssignTo(survey));
        console.log('User: "'+user.user.name+'" assigned to survey: "'+survey.name+'"');
      }
      return json
      })
    }
  }
};