
import { SurveyAssignToMutation } from 'queries/SurveyAssignToMutation';

export const SurveyAssignToUserButton= (props) => {
  
    const fetchData = async () => {
      try {
        const response = await SurveyAssignToMutation(props);
        const data = await response.json();
        console.log("ButtonSurveyAssignToUser",data)
        
      } catch (error) {
        console.error('Error fetching group names:', error);
      }
    };
 
  return (
   <td> <button className="btn btn-outline-dark" onClick={fetchData}>Assign survey to currentUser</button></td>
  )
}