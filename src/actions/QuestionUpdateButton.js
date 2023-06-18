import React from 'react';
import { useDispatch } from 'react-redux';
import { FetchData } from 'async/QuestionUpdateFetch';
import { OccupedQuestionUpdateFetchData } from 'async/OccupedQuestionUpdateFetch';

/**
 * Component for a button that updates a question.
 * @param {object} props - The component props containing the question details.
 * @returns {JSX.Element} - The rendered component.
 */
export const QuestionUpdateButton = (props) => {
  const dispatch = useDispatch();

  /*
  Function to handle question update
  */
  const handleQuestionUpdate = () => {
    dispatch(OccupedQuestionUpdateFetchData(props));
    dispatch(FetchData(props));
  };

  return (
    <button className="btn btn-secondary" onClick={handleQuestionUpdate}>
      Change
    </button>
  );
};