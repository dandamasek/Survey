import { SurveySelectQuery } from '../queries/SurveyGroupQuery';
import { useDispatch } from 'react-redux';
import { loadData } from 'features/SurveySlice';
import { useState } from 'react';

/**
 * Component for a button that fetches data from the survey select query and dispatches the loaded data to the store.
 * @returns {JSX.Element} - The rendered component.
 * @function 
 */
export const SurveySelectButton = () => {
  const dispatch = useDispatch();
  const [dataLoaded, setDataLoaded] = useState(false);

  /*
  Fetch data from the survey select query and dispatch the loaded data to store
  */
  const fetchData = async () => {
    try {
      const response = await SurveySelectQuery();
      const data = await response.json();
      dispatch(loadData(data.data.surveyPage));
      
      /*
      Set the dataLoaded to true
      */
      setDataLoaded(true);
    } catch (error) {
      console.error('Error fetching group names:', error);
    }
  };

  return (
    <div>
      {/* Button to trigger the data fetching */}
      <button className="btn btn-primary" onClick={fetchData} disabled={dataLoaded}>
        Load
      </button>
    </div>
  );
};