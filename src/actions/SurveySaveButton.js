import React from 'react';
import { useDispatch } from 'react-redux';
import { FetchData } from '../async/SurveyInsertFetch';
import {Button } from 'react-bootstrap';
const SurveySaveButton = ({ closeModal, name, type }) => {
  const dispatch = useDispatch();

  const handleSave = () => {
    closeModal();
    dispatch(FetchData({ name, type }));
  };

  return (
    <Button variant="primary" onClick={handleSave}>
      Save
    </Button>
  );
};

export default SurveySaveButton;