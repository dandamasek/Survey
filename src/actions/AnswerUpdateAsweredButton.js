import React from 'react';
import { useDispatch } from 'react-redux';
import { AnswerUpdateAsweredFetch } from '../async/AnswerUpdateAsweredFetch';

/*
Renders a button to update an answered answer.
*/
export const AnswerUpdateAsweredButton = (props) => {
  const dispatch = useDispatch();

  return (
    <button className="btn btn-primary" onClick={() => dispatch(AnswerUpdateAsweredFetch(props))}>
      Close Answer
    </button>
  );
};