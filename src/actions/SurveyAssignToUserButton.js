import { SurveyAssignToMutation } from 'queries/SurveyAssignToMutation';

export const SurveyAssignToUserButton = (props) => {
  // Define the fetchData function to handle the API request
  const fetchData = async () => {
    try {
      // Make the API request using SurveyAssignToMutation
      const response = await SurveyAssignToMutation(props);
      const data = await response.json();
      console.log("ButtonSurveyAssignToUser", data);
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