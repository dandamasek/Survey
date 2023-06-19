import React from 'react';
import { useDispatch } from 'react-redux';
import { QuestionValueUpdateFetch } from '../async/QuestionValueUpdateFetch';

/**
 * Component for a button that updates a question value.
 * @param {Object} props - The component props.
 * @returns {JSX.Element} - The rendered component.
 */
export const QuestionValueUpdateButton = (props) => {
  const dispatch = useDispatch();
  return (
    <div>
      <button className="btn btn-secondary btn-sm" onClick={() => dispatch(QuestionValueUpdateFetch(props))}>
        Save value
      </button>
    </div>
  );
};