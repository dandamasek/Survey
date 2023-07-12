import React, { useState } from 'react';
import { SurveyAssignToUserButton } from 'actions/SurveyAssignToButton';

/**
 * Handles the click event on a user.
 * @param {object} props - The component props containing the users and surveys data.
 * @returns {JSX.Element} - The rendered component.
 */
const AssignUsers = props => {
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedSurvey, setSelectedSurvey] = useState('');

  /**
   * Handles the change event for the user selection.
   * @param {object} event - The change event.
   */
  const handleUserChange = event => {
    const selectedUserId = event.target.value;
    setSelectedUser(selectedUserId);
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
   * Handles the click event for the user selection.
   * @param {object} event - The click event.
   */
  const handleUserClick = event => {
    const selectedUserId = event.target.value;
    console.log(`Clicked user ID: ${selectedUserId}`);
  };

  /**
   * Renders a dropdown menu to choose a user and a survey, and a button to assign the selected survey to the selected user.
   * @returns {JSX.Element} - The rendered component.
   */
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Choose a user:  "), /*#__PURE__*/React.createElement("select", {
    value: selectedUser,
    onChange: handleUserChange
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Select an option"), props.users.map(user => /*#__PURE__*/React.createElement("option", {
    key: user.id,
    value: user.id,
    onClick: handleUserClick
  }, user.name, " (ID: ", user.id, ")"))), /*#__PURE__*/React.createElement("label", null, "Choose a survey:  "), /*#__PURE__*/React.createElement("select", {
    value: selectedSurvey,
    onChange: handleSurveyChange
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Select an option"), props.surveys.map(survey => /*#__PURE__*/React.createElement("option", {
    key: survey.id,
    value: survey.id
  }, survey.name))), selectedUser && selectedSurvey && /*#__PURE__*/React.createElement(SurveyAssignToUserButton, {
    userId: selectedUser,
    surveyId: selectedSurvey
  }));
};
export default AssignUsers;