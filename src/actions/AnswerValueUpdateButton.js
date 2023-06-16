import { useDispatch } from 'react-redux';
import {AnswerValueUpdateFetch} from '../async/AnswerValueUpdateFetch.js';

// Component used to update an answer value
export const AnswerValueUpdateButton = (props) => {
  const dispatch = useDispatch();

  return (
    <button className="btn btn-outline-dark" onClick={() => dispatch(AnswerValueUpdateFetch(props))}>
      Change Value
    </button>
  );
};