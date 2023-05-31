import React from 'react';
import { useDispatch } from 'react-redux';
import { updateQuestion } from 'features/SurveySlice';
import {QuestionUpdateMutation} from '../queries/QuestionUpdateMutation';

export const QuestionUpdateButton = (lastchange,id,name,order,type,surveyId) => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      console.log("Lastchange ",lastchange);
      const response = await QuestionUpdateMutation(lastchange,id,name,order,type);
      const data = await response.json();
      const help = [data.data.questionUpdate,surveyId];

      dispatch(updateQuestion(help));
      lastchange = data.data.questionUpdate.id;
      console.log(data);
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
