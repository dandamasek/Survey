
import { useDispatch } from 'react-redux';
import { setMsg } from 'features/MsgSlice';
import { useState } from 'react';
import {surveyAssignTo} from 'features/SurveySlice';
import { surveyAssignToMutation } from 'queries/SurveyAssignToMutation';

export const ButtonSurveyAssignToUser= (props) => {

  const dispatch = useDispatch()  
  const [dataLoaded, setDataLoaded] = useState(false)
    const fetchData = async () => {
      try {
        const response = await surveyAssignToMutation(props);
        const data = await response.json();
        console.log("ButtonSurveyAssignToUser",data)
        dispatch(setMsg(data.data.surveyAssignToUser.msg));
        dispatch(surveyAssignTo(props));
        
        setDataLoaded(true);
      } catch (error) {
        console.error('Error fetching group names:', error);
      }
    };
 
  return (
   
   <td> <button className="btn btn-outline-dark" onClick={fetchData}>Assign survey to currentUser</button></td>
  
  )
}