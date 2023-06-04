import React from 'react';
import { useDispatch } from 'react-redux';
import { updateQuestion } from 'features/SurveySlice';
import {QuestionUpdateMutation} from '../queries/QuestionUpdateMutation';

export const QuestionUpdateButton = (lastchange,id,name,order,type,surveyId) => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const response = await QuestionUpdateMutation(lastchange,id,name,order,type);
      const data = await response.json();

      if (data.data.questionUpdate.msg == "ok" ) {
        const newProps = [data.data.questionUpdate,surveyId];

        dispatch(updateQuestion(newProps));
        lastchange = data.data.questionUpdate.id;
        console.log("Question updated ",data.data);
      }
     
    } catch (error) {
      console.error('Error fetching group names:', error);
    }
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={fetchData}>
        Change
      </button>
    </div>
  );
};
