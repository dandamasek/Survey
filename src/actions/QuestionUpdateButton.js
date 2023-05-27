import React from 'react';
import { useDispatch } from 'react-redux';
import { updateAnswerValue } from 'features/SurveySlice';
import {QuestionUpdateMutation} from '../queries/QuestionUpdateMutation';

export const QuestionUpdateButton = (lastchange,id,name,order) => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      console.log("Lastchange ",lastchange);
      const response = await QuestionUpdateMutation(lastchange,id,name,order);
      const data = await response.json();
      // dispatch(updateAnswerValue(data));
      lastchange = data.data.questionUpdate.id;
      console.log(data);
    } catch (error) {
      console.error('Error fetching group names:', error);
    }
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={fetchData}>
        Load
      </button>
    </div>
  );
};
