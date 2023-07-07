import React from 'react';

/**
 * Component for the save button in the survey insert modal.
 * @param {Object} props - Button properties
 * @param {string} props.name - Survey name
 * @param {string} props.type - Survey type
 * @param {function} props.onSave - Save button click handler
 * @returns {JSX.Element} - The rendered component.
 */
export const SurveySaveButton = ({ name, type, onSave }) => {
  return (
    <button variant="primary" onClick={onSave}>
      Save
    </button>
  );
};
