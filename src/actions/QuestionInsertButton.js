import React, { useState } from 'react';
import { QuestionInsertMutation } from '../queries/QuestionInsertMutation';
import { Modal, Button, Form } from 'react-bootstrap';
import { addQuestion } from 'features/SurveySlice';
import { useDispatch , useSelector } from 'react-redux';

import { QuestionValueInsertFetch } from '../async/QuestionValueInsertFetch';
import AddQuestionButton from './AddQuestionButton';

/**
 * Component for the question insertion button.
 * @param {Object} props - The component props.
 * @param {string} props.surveyId - The ID of the survey to add the question to.
 * @param {number} props.orderLength - The length of the order.
 * @returns {JSX.Element} - The question insertion button component.
 * @function 
 */
export const QuestionInsertButton = (props) => {
  const copy = useSelector((state) => state.copy);
  const dispatch = useDispatch(); // Get the dispatch function from Redux
  /**
   * State for controlling the visibility of the modal.
   */
  const [showModal, setShowModal] = useState(false);

  /**
   * State for storing the values for questionInsert.
   */
  const [name, setName] = useState('');
  const [typeId, setTypeId] = useState('949d74a2-63b1-4478-82f1-e025d8bc6c8b'); // Default typeID is Otevřená

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  /**
   * Event handler for name input change.
   * @param {Object} event - The event object.
   */
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  /**
   * Event handler for question type selection change.
   * @param {Object} event - The event object.
   */
  const handleTypeChange = (event) => {
    setTypeId(event.target.value);
  };

  /**
   * Function to add a copy question with question values.
   */
  const addCopyQuestion = async () => {
    try {
      // create question from copy needed to be local new created question Id needed for values
      const response = await QuestionInsertMutation({
        name: copy.name,
        surveyId: props.surveyId,
        typeId: copy.type,
        order: props.orderLength + 1,
      });
      const data = await response.json();
      const questionId = data.data.questionInsert.question.id;

      if (data.data.questionInsert.msg === 'ok') {
        console.log('Question ' + data.data.questionInsert.question.name + ' was created on the server');
        dispatch(addQuestion(data.data.questionInsert.question));
      }
      setShowModal(false);

      // create questionValues from copy
      for (const value of copy.values) {
        (() => {
          dispatch(QuestionValueInsertFetch({ questionId, nameValue: value.name, order: props.orderLength + 1 }));
        })();
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <button className="btn btn-success" onClick={() => setShowModal(true)}>
        New question
      </button>

      {/* Bootstrap modal settings, display */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Creating new question</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Question name:</Form.Label>
            <Form.Control type="text" value={name} onChange={handleNameChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Type:</Form.Label>
            <Form.Control as="select" value={typeId} onChange={handleTypeChange}>
              <option value="949d74a2-63b1-4478-82f1-e025d8bc6c8b">Otevřená</option>
              <option value="2a6a1731-1efa-4644-a1d8-5848e4b29ce5">Škála</option>
              <option value="ad0f53fb-240b-47de-ab1d-871bbde6f973">Uzavřená</option>
            </Form.Control>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={addCopyQuestion}>
            Add copied question
          </Button>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
              {/* Use the AddQuestionButton component */}
            <AddQuestionButton
              closeModal={handleCloseModal}
              name={name}
              typeId={typeId}
              surveyId={props.surveyId}
              orderLength={props.orderLength}
            />
        </Modal.Footer>
      </Modal>
    </div>
  );
};
