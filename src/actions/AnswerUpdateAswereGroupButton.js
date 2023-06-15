import React from 'react';
import { useDispatch } from 'react-redux';
import { AnswerUpdateAsweredGroupFetch } from '../async/AnswerUpdateAsweredGroupFetch';

export const AnswerUpdateAsweredGroupButton = (props) => {
  const dispatch = useDispatch();

  return (
    <button className="btn btn-primary" onClick={() => dispatch(AnswerUpdateAsweredGroupFetch(props))}>
      Close survey
    </button>
  );
};