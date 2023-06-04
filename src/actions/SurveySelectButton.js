import  {SurveySelectQuery}  from '../queries/SurveyGroupQuery';
import { useDispatch } from 'react-redux';
import { loadData } from 'features/SurveySlice';
import { useState } from 'react';

export const SurveySelectButton= () => {

  const dispatch = useDispatch()  
  const [dataLoaded, setDataLoaded] = useState(false)

    const fetchData = async () => {
      try {
        const response = await SurveySelectQuery();
        const data = await response.json();
        dispatch(loadData(data.data.surveyPage));
        setDataLoaded(true);
      } catch (error) {
        console.error('Error fetching group names:', error);
      }
    };
 
  return (
    <div>
      <button className="btn btn-primary" onClick={fetchData} disabled={dataLoaded} >Load</button>
    </div>
  )
}