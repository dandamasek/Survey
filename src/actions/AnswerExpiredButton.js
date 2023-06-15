import React from 'react';
import { useDispatch } from 'react-redux';
import { AnswerExpiredFetch } from 'async/AnswerExpiredFetch';

export const AnswerExpiredButton = (props) => {
  const dispatch = useDispatch();
  return (
      <button className="btn btn-secondary" onClick={() => dispatch(AnswerExpiredFetch(props))}>
        Close survey
      </button>
  );
};
