import React from 'react';
import { SurveyAssignToGroupFetch } from '../async/SurveyAssignToGroupFetch';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export const SurveyAssignToGroupButton = (props) => {
  // Get the 'groups' value from the Redux store using useSelector hook
  const groups = useSelector((state) => state.groups);
  
  const dispatch = useDispatch();

  return (
    <div>
      <button className="btn btn-outline-dark" onClick={() =>
        dispatch(SurveyAssignToGroupFetch({
          groups: groups,     // Pass the 'groups' value to the SurveyAssignToGroupFetch action
          surveyId: props.surveyId,
          group: props.group,
        }))
      }>
        Assign to Group
      </button>
    </div>
  );
};