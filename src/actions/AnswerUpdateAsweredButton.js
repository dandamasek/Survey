import React from 'react';
import { useDispatch } from 'react-redux';
import { AnswerUpdateAsweredFetch } from '../async/AnswerUpdateAsweredFetch';

export const AnswerUpdateAsweredButton = (props) => {
  const dispatch = useDispatch();


  return (
    <button className="btn btn-primary" onClick={() => dispatch(AnswerUpdateAsweredFetch(props))}>
      Close Answer
    </button>
  );
};