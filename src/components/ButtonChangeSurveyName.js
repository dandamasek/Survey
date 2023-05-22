import  {SurveyNameMutation}  from '../queries/SurveyNameMutation';
import { useDispatch } from 'react-redux';
import { setMsg } from 'features/MsgSlice';
import { useState } from 'react';
import { updateSurveyName } from 'features/SurveySlice';

export const ButtonChangeSurveyName= (props) => {

  const dispatch = useDispatch()  
  const [dataLoaded, setDataLoaded] = useState(false)
    const fetchData = async () => {
      try {
        const response = await SurveyNameMutation(props);
        const data = await response.json();
        console.log("ButtonChangeSurveyName",data)
        dispatch(setMsg(data.data.surveyUpdate.msg));
        dispatch(updateSurveyName(props));
        
        setDataLoaded(true);
      } catch (error) {
        console.error('Error fetching group names:', error);
      }
    };
 
  return (
   
   <td> <button className="btn btn-outline-dark" onClick={fetchData}>Change Name</button></td>
  
  )
}