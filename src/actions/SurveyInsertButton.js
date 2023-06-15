import React from 'react';
import { FetchData } from '../async/SurveyInsertFetch';
import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

export const SurveyInsertButton = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState(" ");
  const [type, setType] = useState("712029b6-2dbc-4952-9d3e-e897899edf0a");

  // Showing modal if button is pressed
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  return (
    <div>
      {/* Button to trigger the modal */}
      <button className="btn btn-success btn-lg m-2" onClick={() => setShowModal(true)}>
        New survey
      </button>

      {/* Modal component */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Creating new survey</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Name:</Form.Label>
            {/* Input field for survey name */}
            <Form.Control type="text" value={name} onChange={handleNameChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Type:</Form.Label>
            {/* Dropdown select for survey type */}
            <Form.Control as="select" value={type} onChange={handleTypeChange}>
              <option value="712029b6-2dbc-4952-9d3e-e897899edf0a">Hodnocení výuky</option>
            </Form.Control>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          {/* Close button to dismiss the modal */}
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          {/* Save button to submit the survey data */}
          <Button
            variant="primary"
            onClick={() => {
              setShowModal(false);
              dispatch(FetchData({ name, type }));
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};