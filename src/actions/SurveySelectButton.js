// import { SurveySelectQuery } from '../queries/SurveyGroupQuery';
// import { useDispatch } from 'react-redux';
// import { loadData } from 'features/SurveySlice';
// import { useState } from 'react';

// export const SurveySelectButton = () => {
//   const dispatch = useDispatch();
//   const [dataLoaded, setDataLoaded] = useState(false);

//   const fetchData = async () => {
//     try {
//       // Fetch data from the survey select query
//       const response = await SurveySelectQuery();
//       const data = await response.json();

//       // Dispatch the loaded data to the Redux store
//       dispatch(loadData(data.data.surveyPage));
      
//       // Set the dataLoaded state to true
//       setDataLoaded(true);
//     } catch (error) {
//       console.error('Error fetching group names:', error);
//     }
//   };

//   return (
//     <div>
//       {/* Button to trigger the data fetching */}
//       <button className="btn btn-primary" onClick={fetchData} disabled={dataLoaded}>
//         Load
//       </button>
//     </div>
//   );
// };