import React from 'react';
import { useDispatch } from 'react-redux';
import { QuestionValueInsertMutation } from 'queries/QuestionValueInsertMutation';
import { insertQuestionValues } from 'features/SurveySlice';

export const QuestionValueInsertButton = (props) => {
  const dispatch = useDispatch();

  /*
  Function to fetch data and insert a new question value and perform the mutation to insert a new question value
  */
  const fetchData = async () => {
    try {
      const response = await QuestionValueInsertMutation({
        questionId: props.questionId,
        nameValue: props.nameValue,
        order: props.order
      });
      const data = await response.json();

      if (data.data.questionValueInsert.msg === "ok") {
        const newProps = data.data.questionValueInsert.question;

        // Dispatch action to insert the new question value
        dispatch(insertQuestionValues(newProps));
        console.log('New questionValue "' + data.data.questionValueInsert.question.name + '" inserted on server');
      }
    } catch (error) {
      console.error('Error fetching group names:', error);
    }
  };
/*
Renders a button to trigger fetching new value.
*/
  return (
    <div>
      <button className="btn btn-success btn-sm m-1" onClick={fetchData}>
        New value
      </button>
    </div>
  );
};