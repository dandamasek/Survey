import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector,useDispatch } from 'react-redux';
import AnswerShowButton from 'actions/AnswerShowButton';
import { SurveyFetchAsync } from 'actions/LoadSurveyDataAsync';
import { useEffect } from 'react';

export default function SurveyResult() {
  const surveys = useSelector(state => state.surveys);
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(SurveyFetchAsync())
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>

      {/* page header */}
      <div>
        <h1 className="p-4 mb-2 bg-primary text-white">Surveys results</h1>
      </div>
      
      <div className="container ">
      
        <AnswerShowButton surveys={surveys}/>

      </div>
    </div>
  );
}