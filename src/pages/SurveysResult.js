import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector,useDispatch } from 'react-redux';
import AnswerShowButton from 'actions/AnswerShowButton';
import { SurveyFetchAsync } from 'async/LoadSurveyDataAsync';
import { useEffect } from 'react';


export default function SurveyResult() {
  const surveys = useSelector(state => state.surveys); 
  
  /*
  Create a dispatch function from the useDispatch hoo
  */
  const dispatch = useDispatch(); 

  /*
  Fetch survey data when the component mounts
  */
  useEffect(() => {
    dispatch(SurveyFetchAsync()); 
    
  /*
  eslint-disable-next-line react-hooks/exhaustive-deps
  */
  }, []);

  return (
    <div>
      <div>
        <h1 className="p-4 mb-2 bg-warning text-white">Surveys results</h1>
      </div>
      
      <div className="container">
        {/* Render the AnswerShowButton component */}
        <AnswerShowButton surveys={surveys} /> 
      </div>
    </div>
  );
}