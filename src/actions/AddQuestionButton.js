import React from 'react';
import { useDispatch } from 'react-redux';
import { QuestionInsertFetch } from '../async/QuestionInsertFetch';
import { Button } from 'react-bootstrap';

const AddQuestionButton = ({ closeModal, name, typeId, surveyId, orderLength }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(QuestionInsertFetch({ name, surveyId, type: typeId, order: orderLength + 1 }));
    closeModal();
  };

  return (
    <Button variant="primary" onClick={handleClick}>
      Add question
    </Button>
  );
};

export default AddQuestionButton;