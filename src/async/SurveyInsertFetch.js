import { SurveyInsertMutation } from 'queries/SurveyInsertMutation';
import { addSurvey } from 'features/SurveySlice';

// export const FetchData = async (props) => {
  
//   try {
  
//     const response = await SurveyInsertMutation({name: props.name , typeId: props.type});
//     const data = await response.json();

//     // if (data.data.surveyInsert.msg === "ok") {
//     //   const newProps = data.data.surveyInsert.survey;

//     //   dispatch(addSurvey(newProps));
//     //   
//     // }
  
//   } catch (error) {
//     console.error('Error fetching group names:', error);
//   }
    
//   };

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