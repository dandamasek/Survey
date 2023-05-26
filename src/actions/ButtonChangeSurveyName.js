import  {SurveyNameMutation}  from '../queries/SurveyNameMutation';
import { useDispatch } from 'react-redux';
import { updateSurveyName } from 'features/SurveySlice';

export const ButtonChangeSurveyName= (props) => {

  const dispatch = useDispatch()  
    const fetchData = async () => {
      try {
        const response = await SurveyNameMutation(props);
        const data = await response.json();
        console.log("ButtonChangeSurveyName",data)
        if (data.data.surveyUpdate.msg === "ok") {
          dispatch(updateSurveyName(props));
          console.log("Survey name: "+props.newName+" is updated in store and server")
        }
        
      } catch (error) {
        console.error('Error fetching group names:', error);
      }
    };
 
  return (
   
   <td> <button className="btn btn-outline-dark" onClick={fetchData}>Change Name</button></td>
  
  )
}