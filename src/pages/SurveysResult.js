import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector,useDispatch } from 'react-redux';
import ShowAnswersButton from 'actions/ButtonShowAnswers';
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
    <div className="container ">
     
      <ShowAnswersButton />

    </div>
  );
}