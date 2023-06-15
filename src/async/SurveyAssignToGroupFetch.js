import React from 'react';
import { useSelector } from 'react-redux';
import { surveyAssignToMutation } from 'queries/SurveyAssignToMutation';

export const SurveyAssignToGroupButton = (props) => {
  const groups = useSelector((state) => state.groups);


  const fetchData = async () => {
    const group = groups.find((group) => group.id === props.group.id);

    if (group) {
      for (const user of group.memberships) {
        const response = await surveyAssignToMutation({userId: user.user.id, surveyId: props.surveyId});
        const data = await response.json();
        console.log('User: "'+user.user.name+'" is assign to survey');
      }
    }
  };

  return (
    <div>
      <button className="btn btn-outline-dark" onClick={fetchData}>
        Assign to Group
      </button>
    </div>
  );
};
