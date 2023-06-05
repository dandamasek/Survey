import React from 'react';
import { useDispatch } from 'react-redux';
import { QuestionValueUpdateMutation } from 'queries/QuestionValueUpdateMutation';
import { updateQuestionValues } from 'features/SurveySlice';

export const QuestionValueUpdateButton = (lastchange, id, name, order) => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      
      const response = await QuestionValueUpdateMutation(lastchange, id, name, order);
      const data = await response.json();
      if (data.data.questionValueUpdate.msg === "ok") {
        const newProps = data.data.questionValueUpdate.question;
        
        console.log('QuestionValue "'+data.data.questionValueUpdate.question.name+'" updated on server');
        dispatch(updateQuestionValues(newProps));
      }
    
    } catch (error) {
      console.error('Error fetching group names:', error);
    }
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={fetchData}>
        Change value
      </button>
    </div>
  );
};
