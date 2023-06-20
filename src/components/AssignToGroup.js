import React, { useState } from 'react';
import { SurveyAssignToGroupButton } from 'actions/SurveyAssignToGroupButton';

/**
 * Component used to assign a survey to a group.
 * @param {object} props - The component props containing the groups and surveys data.
 * @returns {JSX.Element} - The rendered component.
 */
const AssignGroups = (props) => {
  const [selectedGroup, setSelectedGroup] = useState('');
  const [selectedSurvey, setSelectedSurvey] = useState('');

  /**
   * Handles the change event for the group selection.
   * @param {object} event - The change event.
   */
  const handleGroupChange = (event) => {
    const selectedGroupId = event.target.value;
    setSelectedGroup(selectedGroupId);
  };

  /**
   * Handles the change event for the survey selection.
   * @param {object} event - The change event.
   */
  const handleSurveyChange = (event) => {
    const selectedSurveyId = event.target.value;
    setSelectedSurvey(selectedSurveyId);
  };

  /**
   * Handles the click event for the group selection.
   * @param {object} event - The click event.
   */
  const handleGroupClick = (event) => {
    const selectedGroupId = event.target.value;
    console.log(`Clicked group ID: ${selectedGroupId}`);
  };

  /**
   * Handles the assign to group action.
   * Performs the necessary action to assign the selected survey to the selected group.
   */
  const handleAssignToGroup = () => {
    console.log(`Assigning survey to Group ${selectedGroup}`);
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
          group={{ id: selectedGroup }}
          onClick={handleAssignToGroup}
          surveyId={selectedSurvey}
        />
      )}
    </div>
  );
};

export default AssignGroups;
