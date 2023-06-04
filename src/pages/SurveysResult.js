import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector,useDispatch } from 'react-redux';
import ShowAnswersButton from 'actions/ShowAnswersButton';
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
    <div class="container ">
     
      <ShowAnswersButton></ShowAnswersButton>
      <table className='table table-bordered '> 
        { surveys.map((survey)=> 
          <tbody>
            
            
          </tbody>

        )}
      </table>
    </div>
  );
}