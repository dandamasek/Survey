import React from 'react';
import { useDispatch } from 'react-redux';
import { QuestionValueUpdateFetch } from '../async/QuestionValueUpdateFetch';

export const QuestionValueUpdateButton = (props) => {
  const dispatch = useDispatch();
  return (
    <div>
      <button className="btn btn-secondary btn-sm" onClick={() => dispatch(QuestionValueUpdateFetch(props))}>
        Change value
      </button>
    </div>
  );
};