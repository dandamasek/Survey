import { SurveyUpdateMutation } from 'queries/SurveyUpdateMutation';
import { updateSurveyName } from 'features/SurveySlice';

/**
 * Action creator function to update a survey through API requests.
 * @param {Object} props - The component props.
 * @returns {Function} - The async action function.
 */
export const SurveyUpdateFetch = (props) => (dispatch, getState) => (
  /*
  Call the ProjectsQuery function to fetch projects
  */

  SurveyUpdateMutation(props)
    .then(response => response.json())
    .then(json => {
      const survey = json.data?.surveyUpdate.survey;
      console.log(props,"zavu");
      if (survey) {
        dispatch(updateSurveyName(survey));
        console.log('New survey "'+survey.name+'" is updated on server')
        

      }
      return json
    })
);
