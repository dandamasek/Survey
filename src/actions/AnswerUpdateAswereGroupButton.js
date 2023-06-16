import React from 'react';
import { useDispatch } from 'react-redux';
import { AnswerUpdateAsweredGroupFetch } from '../async/AnswerUpdateAsweredGroupFetch';

/*
Renders a button to close a group's answered survey.
*/
export const AnswerUpdateAsweredGroupButton = (props) => {
  const dispatch = useDispatch();

  return (
    <button className="btn btn-primary" onClick={() => dispatch(AnswerUpdateAsweredGroupFetch(props))}>
      Close survey
    </button>
  );
};