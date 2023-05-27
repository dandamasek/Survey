import React from 'react';
import { useDispatch } from 'react-redux';
import { QuestionValueInsertMutation } from 'queries/QuestionValueInsertMutation';

export const QuestionValueInsertButton = (questionId, name, order) => {
  // const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      
      const response = await QuestionValueInsertMutation(questionId, name, order);
      const data = await response.json();
      console.log(data);
      // dispatch(updateAnswerValue(data));
    

    
    } catch (error) {
      console.error('Error fetching group names:', error);
    }
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={fetchData}>
        Create
      </button>
    </div>
  );
};
