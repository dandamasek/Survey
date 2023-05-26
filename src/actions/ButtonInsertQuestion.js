import  { questionInsertMutation}  from '../queries/QuestionInsertMutation';
// import { useDispatch } from 'react-redux';


// insert new empty question 
export const ButtonInsertQuestion= (props) => {

  // const dispatch = useDispatch()  
    const fetchData = async () => {
      try {
        const response = await questionInsertMutation(props);
        const data = await response.json();
        console.log("ButtonChangeSurveyName",data)
        // dispatch(setMsg(data.data.surveyUpdate.msg));
        // dispatch(updateSurveyName(props));
        
      } catch (error) {
        console.error('Error fetching group names:', error);
      }
    };
 
  return (
   
   <button className="btn btn-outline-dark" onClick={fetchData}>Insert question</button>
  
  )
}