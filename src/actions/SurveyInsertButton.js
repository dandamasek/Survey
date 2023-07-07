import React from 'react';
import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import SurveySaveButton from './SurveySaveButton';

/**
 * Component for a button that inserts a new survey.
 * @returns {JSX.Element} - The rendered component.
 * @function 
 */

export const SurveyInsertButton = () => {
  /*
Renders a button to insert a new survey.
*/

  const [name, setName] = useState(" ");
  const [type, setType] = useState("712029b6-2dbc-4952-9d3e-e897899edf0a");
  const [showModal, setShowModal] = useState(false);

/**
   * Function to handle closing the modal.
   */
  const handleCloseModal = () => {
    setShowModal(false);
  };

/**
   * Function to handle changes in the survey name input field.
   * @param {Object} event - The event object.
   */
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

   /**
   * Function to handle changes in the survey type dropdown select.
   * @param {Object} event - The event object.
   */
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
            <Form.Label>Survey Name:</Form.Label>
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
  <Button variant="secondary" onClick={handleCloseModal}>
    Close
  </Button>
  {/* Use the SaveButton component */}
  <SurveySaveButton closeModal={handleCloseModal} name={name} type={type} />
</Modal.Footer>
      </Modal>
    </div>
  );
};