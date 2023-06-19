import { SurveyInsertMutation } from 'queries/SurveyInsertMutation';
import { addSurvey } from 'features/SurveySlice';

/**
 * Action creator function to fetch data by inserting a new survey.
 * @param {Object} props - The component props.
 * @returns {Function} - The async action function.
 */
 
export const FetchData = (props) => (dispatch, getState) => (
  /*
  Call the SurveyInsertMutation function to insert a new survey
  */
  SurveyInsertMutation({name: props.name , typeId: props.type})
    .then(response => response.json())
    .then(json => {
      const survey = json.data?.surveyInsert.survey;

      if (survey) {
        dispatch(addSurvey(survey))
        console.log('New survey"'+survey.data+'" insert on server')
      }
      return json
    })
);