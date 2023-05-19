import  {SurveyChangeName}  from '../queries/SurveyChangeName';
import { useDispatch } from 'react-redux';
import { loadData } from 'features/SurveySlice';
import { useState } from 'react';

export const ButtonChangeSurveyName= (props) => {
  console.log("ButtonSurveyName", props)
  const dispatch = useDispatch()  
  const [dataLoaded, setDataLoaded] = useState(false)
    const fetchData = async () => {
      try {
        const response = await SurveyChangeName(props);
        const data = await response.json();

        // dispatch(loadData(data.data.surveyPage));
        // setDataLoaded(true);
      } catch (error) {
        console.error('Error fetching group names:', error);
      }
    };
 
  return (
    <div>
      <button  onClick={fetchData} disabled={dataLoaded} >Change Name</button>
    </div>
  )
}