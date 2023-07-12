import React, { useState } from 'react';
import { SurveyAssignToGroupButton } from 'actions/SurveyAssignToGroupButton';

/**
 * Component used to assign a survey to a group.
 * @param {object} props - The component props containing the groups and surveys data.
 * @returns {JSX.Element} - The rendered component.
 */
const AssignGroups = props => {
  const [selectedGroup, setSelectedGroup] = useState('');
  const [selectedSurvey, setSelectedSurvey] = useState('');

  /**
   * Handles the change event for the group selection.
   * @param {object} event - The change event.
   */
  const handleGroupChange = event => {
    const selectedGroupId = event.target.value;
    setSelectedGroup(selectedGroupId);
  };

  /**
   * Handles the change event for the survey selection.
   * @param {object} event - The change event.
   */
  const handleSurveyChange = event => {
    const selectedSurveyId = event.target.value;
    setSelectedSurvey(selectedSurveyId);
  };

  /**
   * Handles the click event for the group selection.
   * @param {object} event - The click event.
   */
  const handleGroupClick = event => {
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
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Choose a group:"), /*#__PURE__*/React.createElement("select", {
    value: selectedGroup,
    onChange: handleGroupChange
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Select an option"), props.groups.map(group => /*#__PURE__*/React.createElement("option", {
    key: group.id,
    value: group.id,
    onClick: handleGroupClick
  }, group.name, " (ID: ", group.id, ")"))), /*#__PURE__*/React.createElement("label", null, "Choose a survey:"), /*#__PURE__*/React.createElement("select", {
    value: selectedSurvey,
    onChange: handleSurveyChange
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Select an option"), props.surveys.map(survey => /*#__PURE__*/React.createElement("option", {
    key: survey.id,
    value: survey.id
  }, survey.name))), selectedGroup && selectedSurvey && /*#__PURE__*/React.createElement(SurveyAssignToGroupButton, {
    group: {
      id: selectedGroup
    },
    onClick: handleAssignToGroup,
    surveyId: selectedSurvey
  }));
};
export default AssignGroups;