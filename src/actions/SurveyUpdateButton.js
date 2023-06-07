import  {SurveyUpdateMutation}  from '../queries/SurveyUpdateMutation';
import { useDispatch } from 'react-redux';
import { updateSurveyName } from 'features/SurveySlice';

export const SurveyUpdateButton= (props) => {

  const dispatch = useDispatch()  
    const fetchData = async () => {
      try {
        const response = await SurveyUpdateMutation(props);
        const data = await response.json();
        if (data.data.surveyUpdate.msg === "ok") {
          const newProps = [props.id, data.data.surveyUpdate.survey.lastchange, data.data.surveyUpdate.survey.name]
          dispatch(updateSurveyName(newProps));
          console.log("Survey name: "+props.newName+" is updated in store and server")
        }
        
      } catch (error) {
        console.error('Error fetching group names:', error);
      }
    };
 
  return (
   
    <button className="btn btn-secondary m-2" onClick={fetchData}>Change Name</button>
  
  )
}