import { SurveyAssignToMutation } from 'queries/SurveyAssignToMutation';
import { surveyAssignTo } from 'features/SurveySlice';

  /**
 * An asynchronous action creator that fetches projects and dispatches the 'loadProjects' action.
 * @returns {Function} A function that accepts the 'dispatch' and 'getState' functions from Redux.
 */


export const SurveyAssignToGroupFetch = (props) => (dispatch, getState) => {

  const group = props.groups.find((group) => group.id === props.group.id);
  if (group) {
    for (const user of group.memberships) {
  /*
  Call the ProjectsQuery function to fetch projects and extract the projects data from the JSON response
  */

  SurveyAssignToMutation({userId: user.user.id, surveyId: props.surveyId})
    .then(response => response.json())
    .then(json => {

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