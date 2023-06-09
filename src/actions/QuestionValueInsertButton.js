import React from 'react';
import { useDispatch } from 'react-redux';
import { QuestionValueInsertMutation } from 'queries/QuestionValueInsertMutation';
import {insertQuestionValues} from 'features/SurveySlice';
import { useState } from'react';

export const QuestionValueInsertButton = (props) => {
  const dispatch = useDispatch();
  const [name] = useState(" ");

  const fetchData = async () => {
    try {
      
      const response = await QuestionValueInsertMutation({questionId: props.questionId,nameValue: props.nameValue,order: props.order});
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
      <button className="btn btn-success btn-sm m-2" onClick={fetchData}>
        Create new value
      </button>
    </div>
  );
};
