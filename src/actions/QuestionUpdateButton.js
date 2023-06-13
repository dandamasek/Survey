import React from 'react';
import { useDispatch } from 'react-redux';
import { FetchData } from 'async/QuestionUpdateFetch';
import { OccupedQuestionUpdateFetchData } from 'async/OccupedQuestionUpdateFetch';

export const QuestionUpdateButton = (props) => {
  const dispatch = useDispatch();
  return (
      <button className="btn btn-secondary" onClick={() => 
        {
          dispatch(OccupedQuestionUpdateFetchData(props));
          dispatch(FetchData(props)) ; 
        }}>
        Change
      </button>
  );
};
