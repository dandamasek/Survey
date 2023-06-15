import  {AnswerValueMutation}  from '../queries/AnswerValueMutation';
import { useDispatch } from 'react-redux';
import { updateAnswerValue } from 'features/SurveySlice';

export const AnswerValueUpdateButton= (props) => {
  const dispatch = useDispatch()  
  // console.log("button",props);

  const fetchData = async () => {
    try {
      const response = await AnswerValueMutation(props);
      const data = await response.json();
  
      
     console.log(data);
      if(data.data.answerUpdate.msg === "ok") {
        dispatch(updateAnswerValue(data.data.answerUpdate.answer));
        console.log("AnswerValue is updated on server");
      }

    } catch (error) {
      console.error('Error fetching group names:', error);
    }
  };
 
  return (
      <button  className="btn btn-outline-dark" onClick={fetchData} >Change Value</button>
  )
}