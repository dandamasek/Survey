import React from 'react';
import { useDispatch } from 'react-redux';
import { QuestionValueInsertMutation } from 'queries/QuestionValueInsertMutation';

export const QuestionValueInsertButton = (questionId, order) => {
  // const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      
      const response = await QuestionValueInsertMutation(questionId, order);
      const data = await response.json();
      if (data.data.questionValueInsert === "ok") {
        console.log("New QuestionValue Insert", data)

      }

      // dispatch(updateAnswerValue(data));
    

    
    } catch (error) {
      console.error('Error fetching group names:', error);
    }
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={fetchData}>
        Create new value
      </button>
    </div>
  );
};