import { SurveyAssignToMutation } from 'queries/SurveyAssignToMutation';
import { surveyAssignTo } from 'features/SurveySlice';
import { useDispatch } from 'react-redux';

export const SurveyAssignToUserButton = (props) => {
  const dispatch = useDispatch();
  // Define the fetchData function to handle the API request
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