import { useDispatch } from 'react-redux';
import {AnswerValueUpdateFetch} from '../async/AnswerValueUpdateFetch';

/**
 * Component for a button that updates an answer value.
 * @param {object} props - The component props containing the answer value details.
 * @returns {JSX.Element} - The rendered component.
 * @function 
 */
export const AnswerValueUpdateButton = (id,lastchange,value) => {
  const dispatch = useDispatch();
/*
Component used to update an answer value
*/
  return (
    <button className="btn btn-secondary" onClick={() => dispatch(AnswerValueUpdateFetch({id : id, lastchange: lastchange, value: value}))}>
      Save changes
    </button>
  );
};