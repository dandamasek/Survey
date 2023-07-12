import { SurveyAssignToMutation } from 'queries/SurveyAssignToMutation';
import { surveyAssignTo } from 'features/SurveySlice';

/**
* Action creator function to assign a user to a survey and fetch the updated survey.
* @param {Object} props - The component props.
* @returns {Function} - The async action function.
*/

export const SurveyAssignToGroupFetch = props => (dispatch, getState) => {
  /*
  Call the SurveyAssignToMutation function to assign the user to the survey
  */
  const group = props.groups.find(group => group.id === props.group.id);
  if (group) {
    for (const user of group.memberships) {
      SurveyAssignToMutation({
        userId: user.user.id,
        surveyId: props.surveyId
      }).then(response => response.json()).then(json => {
        const survey = json.data?.surveyAssingTo.survey;
        if (survey) {
          dispatch(surveyAssignTo(survey));
          console.log('User: "' + user.user.name + '" assigned to survey: "' + survey.name + '"');
        }
        return json;
      });
    }
  }
};