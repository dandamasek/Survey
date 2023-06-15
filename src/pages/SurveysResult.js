import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector,useDispatch } from 'react-redux';
import AnswerShowButton from 'actions/AnswerShowButton';
import { SurveyFetchAsync } from 'actions/LoadSurveyDataAsync';
import { useEffect } from 'react';


export default function SurveyResult() {
  const surveys = useSelector(state => state.surveys); // Select surveys from the Redux store
  
  const dispatch = useDispatch(); // Create a dispatch function from the useDispatch hook

  useEffect(() => {
    dispatch(SurveyFetchAsync()); // Fetch survey data when the component mounts
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {/* Page header */}
      <div>
        <h1 className="p-4 mb-2 bg-primary text-white">Surveys results</h1>
      </div>
      
      <div className="container">
        <AnswerShowButton surveys={surveys} /> {/* Render the AnswerShowButton component */}
      </div>
    </div>
  );
}