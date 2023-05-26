import React from 'react';
import { useDispatch } from 'react-redux';
import { updateAnswerValue } from 'features/SurveySlice';
import {QuestionUpdateMutation} from '../queries/QuestionUpdateMutation';

export const QuestionUpdateButton = (props) => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      
      const response = await QuestionUpdateMutation(props);
      const data = await response.json();
      // dispatch(updateAnswerValue(data));
      props.lastchange = data.data.lastchange
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
