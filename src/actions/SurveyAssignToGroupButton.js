import React from 'react';
import { SurveyAssignToGroupFetch } from '../async/SurveyAssignToGroupFetch';
import { useDispatch, useSelector } from 'react-redux';

/**
 * Component for a button that assigns a survey to a group.
 * @param {Object} props - The component props.
 * @returns {JSX.Element} - The rendered component.
 */
export const SurveyAssignToGroupButton = (props) => {
  /*
  Get the 'groups' value from the Redux store using useSelector hook
  */
 const groups = useSelector((state) => state.groups);
  const dispatch = useDispatch();

/*
 Renders a button to assign a survey to a group.
*/
  return (
    <div>
      <button className="btn btn-outline-dark" onClick={() =>
        dispatch(SurveyAssignToGroupFetch({
          groups: groups,  
          surveyId: props.surveyId,
          group: props.group,
        }))
      }>
        Assign to Group
      </button>
    </div>
  );
};