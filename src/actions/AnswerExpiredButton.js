import React from 'react';
import { useDispatch } from 'react-redux';
import { AnswerExpiredFetch } from 'async/AnswerExpiredFetch';
/*
A button component used to close a survey
*/
export const AnswerExpiredButton = (props) => {
  const dispatch = useDispatch();

  /*
  Handle button click event by dispatching an action with the 'AnswerExpiredFetch' function
  */
  return (
    <button className="btn btn-secondary" onClick={() => dispatch(AnswerExpiredFetch(props))}>
      Close survey
    </button>
  );
};