import { AnswerValueMutation } from '../queries/AnswerValueMutation';
import { useDispatch } from 'react-redux';
import { updateAnswerValue } from 'features/SurveySlice';

// Component used to update an answer value
export const AnswerValueUpdateButton = (props) => {
  const dispatch = useDispatch();

  // Function to fetch data and update the answer value
  const fetchData = async () => {
    try {
      // Perform the answer value mutation request
      const response = await AnswerValueMutation(props);
      const data = await response.json();

      console.log(data);

      // Check if the answer update was successful
      if (data.data.answerUpdate.msg === 'ok') {
        // Dispatch an action to update the answer value in the Redux store
        dispatch(updateAnswerValue(data.data.answerUpdate.answer));
        console.log('AnswerValue is updated on server');
      }
    } catch (error) {
      console.error('Error fetching group names:', error);
    }
  };

  return (
    <button className="btn btn-outline-dark" onClick={fetchData}>
      Change Value
    </button>
  );
};