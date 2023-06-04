import React from 'react';
import { useDispatch } from 'react-redux';
import { QuestionValueUpdateMutation } from 'queries/QuestionValueUpdateMutation';


export const QuestionValueUpdateButton = (lastchange, id, name, order) => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      
      const response = await QuestionValueUpdateMutation(lastchange, id, name, order);
      const data = await response.json();
      if (data.data.questionValueUpdate.msg === "ok") {
        console.log("New QuestionValue updated", data)
      }

      // dispatch(updateAnswerValue(data));
    

    
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
