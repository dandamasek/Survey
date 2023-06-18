import { useDispatch } from 'react-redux';
import {AnswerValueUpdateFetch} from '../async/AnswerValueUpdateFetch';
/*
Component used to update an answer value
*/
export const AnswerValueUpdateButton = (props) => {
  const dispatch = useDispatch();


  return (
    <button className="btn btn-outline-dark" onClick={() => dispatch(AnswerValueUpdateFetch({id : props.id, lastchange: props.lastchange, value: props.value}))}>
      Change Value
    </button>
  );
};