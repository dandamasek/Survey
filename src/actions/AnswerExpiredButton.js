import React from 'react';
import { useDispatch } from 'react-redux';
import { AnswerExpiredFetch } from 'async/AnswerExpiredFetch';

/**
 * Button component used to close a survey.
 * @param {object} props - The component props containing the necessary details.
 * @returns {JSX.Element} - The rendered component.
 * @function 
 */
export const AnswerExpiredButton = (props) => {
  const dispatch = useDispatch();

  return (
    <button className="btn btn-danger" onClick={() => dispatch(AnswerExpiredFetch(props))}>
      Close survey
    </button>
  );
};