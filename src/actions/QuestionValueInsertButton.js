import React from 'react';
import { useDispatch } from 'react-redux';
import { QuestionValueInsertMutation } from 'queries/QuestionValueInsertMutation';
import {insertQuestionValues} from 'features/SurveySlice';

export const QuestionValueInsertButton = (questionId, order) => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      
      const response = await QuestionValueInsertMutation(questionId, order);
      const data = await response.json();
      if (data.data.questionValueInsert.msg === "ok") {
        const newProps = data.data.questionValueInsert.question;

        dispatch(insertQuestionValues(newProps));
        console.log('New questionValue"'+data.data.questionValueInsert.question.name+'" insert on server')
      }
    
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
