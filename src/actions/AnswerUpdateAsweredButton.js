import React from 'react';
import { useDispatch } from 'react-redux';
import { AnswerUpdateAsweredFetch } from '../async/AnswerUpdateAsweredFetch';

/**
 * Component for a button to update an answered answer.
 * @param {object} props - The component props containing the necessary details.
 * @returns {JSX.Element} - The rendered component.
 */
export const AnswerUpdateAsweredButton = (props) => {
  const dispatch = useDispatch();

  return (
    <button className="btn btn-primary" onClick={() => dispatch(AnswerUpdateAsweredFetch(props))}>
      Close Answer
    </button>
  );
};