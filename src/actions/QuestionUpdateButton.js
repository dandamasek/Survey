import React from 'react';
import { useDispatch } from 'react-redux';
import { updateQuestion } from 'features/SurveySlice';
import {QuestionUpdateMutation} from '../queries/QuestionUpdateMutation';

export const QuestionUpdateButton = (props) => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const response = await QuestionUpdateMutation(props.lastchange,props.id,props.name,props.order,props.type);
      const data = await response.json();

      if (data.data.questionUpdate.msg == "ok" ) {
        const newProps = [data.data.questionUpdate.question,props.surveyId];

        dispatch(updateQuestion(newProps));
        
        console.log("Question updated on server",data.data);
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
