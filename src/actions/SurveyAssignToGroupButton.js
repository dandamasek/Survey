import React from 'react';
import { useSelector } from 'react-redux';
import { surveyAssignToMutation } from 'queries/SurveyAssignToMutation';

export const SurveyAssignToGroupButton = (props) => {
  const users = useSelector((state) => state.users);
  const groups = useSelector((state) => state.groups);

  const fetchData = async () => {
    try {
      const response = await surveyAssignToMutation(props);
      const data = await response.json();
      console.log("ButtonSurveyAssignToGroup", data);
      console.log(groups);

      // Find the group with the matching groupId
      const group = groups.find((group) => group.id === props.group.id);

      if (group) {
        // Get the list of user IDs belonging to the group
        const groupUserIds = group.memberships.map((membership) => membership.user.id);

        // Assign the survey to users in the group
          groupUserIds.forEach((userId) => {
          const user = users.find((user) => user.id === userId);

          if (user) {
            console.log(`Assigning survey to User ${user.id}`);
            surveyAssignToMutation({ surveyId: data.surveyId, userId: user.id }); // Call the mutation to assign the survey to the user
          } else {
            console.log(`User ${userId} not found`);
          }
        });
      } else {
        console.log('Group not found');
      }
    } catch (error) {
      console.error('Error assigning survey to group:', error);
    }
  };

  return (
    <td>
      <button className="btn btn-outline-dark" onClick={fetchData}>
        Assign to Group
      </button>
    </td>
  );
};