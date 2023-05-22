import  {AnswerValueMutation}  from '../queries/AnswerValueMutation';
import { useDispatch } from 'react-redux';
import { setMsg } from 'features/MsgSlice';
import { useState } from 'react';
import { updateAnswerValue } from 'features/SurveySlice';

export const ButtonChangeAnswerValue= (props) => {
  const dispatch = useDispatch()  
  const [dataLoaded, setDataLoaded] = useState(false)

  const fetchData = async () => {
    try {
      const response = await AnswerValueMutation(props);
      const data = await response.json();
      // dispatch(setMsg(data.data.answerUpdate.msg));
      dispatch(updateAnswerValue(props));
      console.log(data)
      setDataLoaded(true);
    } catch (error) {
      console.error('Error fetching group names:', error);
    }
  };
 
  return (
    <div>
      <button  class="btn btn-default" onClick={fetchData} >Change Name</button>
    </div>
  )
}