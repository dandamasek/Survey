import { useDispatch } from 'react-redux';
import { SurveyUpdateFetch } from '../async/SurveyUpdateFetch';

export const SurveyUpdateButton = (props) => {
  const dispatch = useDispatch();

  
  return (
    <button className="btn btn-secondary m-2" onClick={() => dispatch(SurveyUpdateFetch(props))}>
      Change Name
    </button>
  );
};
