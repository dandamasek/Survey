import { useDispatch } from 'react-redux';
import {AnswerValueUpdateFetch} from '../async/AnswerValueUpdateFetch';

/**
 * Component for a button that updates an answer value.
 * @param {object} props - The component props containing the answer value details.
 * @returns {JSX.Element} - The rendered component.
 * @function 
 */
export const AnswerValueUpdateButton = (props) => {
  const dispatch = useDispatch();
/*
Component used to update an answer value
*/
  return (
    <button className="btn btn-secondary" onClick={() => dispatch(AnswerValueUpdateFetch({id : props.id, lastchange: props.lastchange, value: props.value}))}>
      Save changes
    </button>
  );
};