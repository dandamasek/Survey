import React from 'react';
import { useDispatch } from 'react-redux';
import { QuestionValueUpdateMutation } from 'queries/QuestionValueUpdateMutation';
import { updateQuestionValues } from 'features/SurveySlice';

export const QuestionValueUpdateButton = (lastchange, id, name, order) => {
  const dispatch = useDispatch();

  // Function to fetch data and update the question value
  const fetchData = async () => {
    try {
      // Perform the mutation to update the question value
      const response = await QuestionValueUpdateMutation(lastchange, id, name, order);
      const data = await response.json();

      if (data.data.questionValueUpdate.msg === "ok") {
        const newProps = data.data.questionValueUpdate.question;

        console.log('QuestionValue "' + data.data.questionValueUpdate.question.name + '" updated on server');
        
        // Dispatch action to update the question value
        dispatch(updateQuestionValues(newProps));
      }
    } catch (error) {
      console.error('Error fetching group names:', error);
    }
  };

  return (
    <div>
      <button className="btn btn-secondary btn-sm" onClick={fetchData}>
        Change value
      </button>
    </div>
  );
};