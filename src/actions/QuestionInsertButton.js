import React, { useState } from 'react';
import { questionInsertMutation } from '../queries/QuestionInsertMutation';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addQuestion } from 'features/SurveySlice';

export const QuestionInsertButton = (props) => {
  const dispatch = useDispatch();

  // showing modal if button pressed
  const [showModal, setShowModal] = useState(false);

  // stored values for questionInsert
  const [name, setName] = useState('');

  // default typeID is Otevřená
  const [typeId, setTypeId] = useState("949d74a2-63b1-4478-82f1-e025d8bc6c8b");

  const fetchData = async () => {
    try {     
      const response = await questionInsertMutation(name,props.surveyId,typeId,props.orderLength+1);
      const data = await response.json(name,typeId,props.surveyId,props.orderLength+1);
      
      // const data.data.questionInsert.msg === "ok";

      if (true) {
        dispatch(addQuestion(data.data.questionInsert.question))
        console.log("Question "+{name}+ " was created in server");

        // dispatch(updateSurveyName(newProps));
      }

      setShowModal(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTypeChange = (event) => {
    setTypeId(event.target.value);
  };

  return (
    <div >
      <button className="btn btn-success " onClick={() => setShowModal(true)}>
        Insert question
      </button>

      {/* modal bottstrap setting */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Hello</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Name:</Form.Label>
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
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={fetchData}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
