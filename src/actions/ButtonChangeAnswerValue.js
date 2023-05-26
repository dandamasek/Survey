import  {AnswerValueMutation}  from '../queries/AnswerValueMutation';
import { useDispatch } from 'react-redux';
import { updateAnswerValue } from 'features/SurveySlice';

export const ButtonChangeAnswerValue= (props) => {
  const dispatch = useDispatch()  

  const fetchData = async () => {
    try {
      const response = await AnswerValueMutation(props);
      const data = await response.json();
      // dispatch(setMsg(data.data.answerUpdate.msg));
      // if(data.data.answerUpdate.mgs === 'true')
      dispatch(updateAnswerValue(props));
      console.log(data)
    } catch (error) {
      console.error('Error fetching group names:', error);
    }
  };
 
  return (
      <button  className="btn btn-outline-dark" onClick={fetchData} >Change Value</button>
  )
}