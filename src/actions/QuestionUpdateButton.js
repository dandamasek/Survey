import React from 'react';
import { useDispatch } from 'react-redux';
import { FetchData } from 'async/QuestionUpdateFetch';
import { OccupedQuestionUpdateFetchData } from 'async/OccupedQuestionUpdateFetch';

export const QuestionUpdateButton = (props) => {
  const dispatch = useDispatch();

  /*
  Function to handle question update
  */
  const handleQuestionUpdate = () => {
    // Dispatch actions to update question data
    dispatch(OccupedQuestionUpdateFetchData(props));
    dispatch(FetchData(props));
  };

  return (
    <button className="btn btn-secondary" onClick={handleQuestionUpdate}>
      Change
    </button>
  );
};