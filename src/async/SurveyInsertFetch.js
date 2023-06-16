import { SurveyInsertMutation } from 'queries/SurveyInsertMutation';
import { addSurvey } from 'features/SurveySlice';

  /*
  Fetches data from the server by making an API request to insert a new survey.
   * @returns {Function} A function that accepts the 'dispatch' and 'getState' functions from Redux.
  */
 
export const FetchData = (props) => (dispatch, getState) => {
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
};