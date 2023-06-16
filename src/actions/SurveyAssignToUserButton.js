import { SurveyAssignToMutation } from 'queries/SurveyAssignToMutation';
import { surveyAssignTo } from 'features/SurveySlice';
import { useDispatch } from 'react-redux';
/*
 Renders a button to assign a survey to the current user.
 */
export const SurveyAssignToUserButton = (props) => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      // Make the API request using SurveyAssignToMutation
      const response = await SurveyAssignToMutation(props);
      const data = await response.json();
      console.log("ButtonSurveyAssignToUser", data);
      dispatch(surveyAssignTo(data.data.surveyAssingTo.survey));
    } catch (error) {
      console.error('Error fetching group names:', error);
    }
  };

  return (
    <div>
      <button className="btn btn-outline-dark" onClick={fetchData}>
        Assign survey to currentUser
      </button>
    </div>
  );
};