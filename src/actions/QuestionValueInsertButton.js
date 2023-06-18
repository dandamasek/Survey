import React from 'react';
import { useDispatch } from 'react-redux';
import { QuestionValueInsertFetch } from '../async/QuestionValueInsertFetch'

/**
 * Component for a button that inserts a new question value.
 * @param {Object} props - The component props.
 * @returns {JSX.Element} - The rendered component.
 */
export const QuestionValueInsertButton = (props) => {
  const dispatch = useDispatch();

  /*
  Function to fetch data and insert a new question value
  */
  
  return (
    <div>
      <button className="btn btn-success btn-sm m-1" onClick={() => dispatch(QuestionValueInsertFetch(props))}>
        New value
      </button>
    </div>
  );
};