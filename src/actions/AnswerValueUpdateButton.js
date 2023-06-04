import  {AnswerValueMutation}  from '../queries/AnswerValueMutation';
import { useDispatch } from 'react-redux';
import { updateAnswerValue } from 'features/SurveySlice';

export const AnswerValueUpdateButton= (props) => {
  const dispatch = useDispatch()  

  const fetchData = async () => {
    try {
      const response = await AnswerValueMutation(props);
      const data = await response.json();
  
      
  
      if(data.data.answerUpdate.msg === "ok") {
        
        const newProps = [props.id, data.data.answerUpdate.answer.lastchange, data.data.answerUpdate.answer.value]
        dispatch(updateAnswerValue(newProps));
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