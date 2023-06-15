import React, { useState } from 'react';
import { SurveyAssignToGroupButton } from 'actions/SurveyAssignToGroupButton';

const AssignGroups = (props) => {
  const [selectedGroup, setSelectedGroup] = useState('');
  const [selectedSurvey, setSelectedSurvey] = useState('');

  const handleGroupChange = (event) => {
    const selectedGroupId = event.target.value;
    setSelectedGroup(selectedGroupId);
  };

  const handleSurveyChange = (event) => {
    const selectedSurveyId = event.target.value;
    setSelectedSurvey(selectedSurveyId);
  };

  const handleGroupClick = (event) => {
    const selectedGroupId = event.target.value;
    console.log(`Clicked group ID: ${selectedGroupId}`);
  };

  const handleAssignToGroup = () => {
    // Perform the necessary action to assign the selected survey to the selected group
    console.log(`Assigning survey to Group ${selectedGroup}`);
    // Make the necessary API call or dispatch an action to assign the survey to the group
  };

  return (
    <div>
      <label>Choose a group:</label>
      <select value={selectedGroup} onChange={handleGroupChange}>
        <option value="">Select an option</option>
        {props.groups.map((group) => (
          <option
            key={group.id}
            value={group.id}
            onClick={handleGroupClick}
          >
            {group.name} (ID: {group.id})
          </option>
        ))}
      </select>

      <label>Choose a survey:</label>
      <select value={selectedSurvey} onChange={handleSurveyChange}>
        <option value="">Select an option</option>
        {props.surveys.map((survey) => (
          <option key={survey.id} value={survey.id}>
            {survey.name}
          </option>
        ))}
      </select>

      {selectedGroup && selectedSurvey && (
        <SurveyAssignToGroupButton
          group={{ id: selectedGroup }} // Pass the selected group ID to the SurveyAssignToGroupButton
          onClick={handleAssignToGroup} // Pass the onClick handler to the SurveyAssignToGroupButton
          surveyId={selectedSurvey } // Pass the selected survey ID to the SurveyAssignToGroupButton
        />
      )}
    </div>
  );
};

export default AssignGroups;