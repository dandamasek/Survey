import React, { useState } from 'react';
import { SurveyAssignToUserButton } from 'actions/SurveyAssignToButton';

/**
 * Handles the click event on a user.
 * @param {object} props - The component props containing the users and surveys data.
 * @returns {JSX.Element} - The rendered component.
 */
const AssignUsers = (props) => {
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedSurvey, setSelectedSurvey] = useState('');

  /**
   * Handles the change event for the user selection.
   * @param {object} event - The change event.
   */
  const handleUserChange = (event) => {
    const selectedUserId = event.target.value;
    setSelectedUser(selectedUserId);
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
   * Handles the click event for the user selection.
   * @param {object} event - The click event.
   */
  const handleUserClick = (event) => {
    const selectedUserId = event.target.value;
    console.log(`Clicked user ID: ${selectedUserId}`);
  };

  /**
   * Renders a dropdown menu to choose a user and a survey, and a button to assign the selected survey to the selected user.
   * @returns {JSX.Element} - The rendered component.
   */
  return (
    <div>
      <label>Choose a user:  </label>
      <select value={selectedUser} onChange={handleUserChange}>
        <option value="">Select an option</option>
        {props.users.map(user => (
          <option
            key={user.id}
            value={user.id}
            onClick={handleUserClick}
          >
            {user.name} (ID: {user.id})
          </option>
        ))}
      </select>

      <label>Choose a survey:  </label>
      <select value={selectedSurvey} onChange={handleSurveyChange}>
        <option value="">Select an option</option>
        {props.surveys.map(survey => (
          <option key={survey.id} value={survey.id}>
            {survey.name}
          </option>
        ))}
      </select>

      {selectedUser && selectedSurvey && (
        <SurveyAssignToUserButton
          userId={selectedUser}
          surveyId={selectedSurvey}
        />
      )}
    </div>
  );
};

export default AssignUsers;
