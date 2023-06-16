import { useDispatch } from 'react-redux';
import {SurveyAssignToFetch } from '../async/SurveyAssignToFetch';

export const SurveyAssignToUserButton = (props) => {
  const dispatch = useDispatch();

  return (
    <div>
      <button className="btn btn-outline-dark" onClick={() => dispatch(SurveyAssignToFetch(props))}>
        Assign survey to currentUser
      </button>
    </div>
  );
};