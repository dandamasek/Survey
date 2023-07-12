import { SurveyAssignToMutation } from 'queries/SurveyAssignToMutation';
import { surveyAssignTo } from 'features/SurveySlice';
import { useDispatch } from 'react-redux';
/**
 * Component for a button that assigns a survey to the current user.
 * @param {Object} props - The component props.
 * @returns {JSX.Element} - The rendered component.
 * @function 
 */

export const SurveyAssignToUserButton = props => {
  /*
  Renders a button to assign a survey to the current user.
  */
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
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-outline-dark",
    onClick: fetchData
  }, "Assign survey to currentUser"));
};