import React, { useState } from 'react';
import { questionInsertMutation } from '../queries/QuestionInsertMutation';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addQuestion } from 'features/SurveySlice';
import { useSelector } from 'react-redux';
import { QuestionValueInsertMutation } from 'queries/QuestionValueInsertMutation';
import { insertQuestionValues } from 'features/SurveySlice';

export const QuestionInsertButton = (props) => {
  const dispatch = useDispatch();
  const copy = useSelector((state) => state.copy);

  /*
  State for controlling the visibility of the modal
  */
  const [showModal, setShowModal] = useState(false);

  /*
  State for storing the values for questionInsert
  */
  const [name, setName] = useState('');
  const [typeId, setTypeId] = useState('949d74a2-63b1-4478-82f1-e025d8bc6c8b'); // Default typeID is Otevřená

  /*
  Function to fetch data and create a new question
  */
  const fetchData = async () => {
    try {
      /*
      Perform the question insert mutation request
      */
      const response = await questionInsertMutation(name, props.surveyId, typeId, props.orderLength + 1);
      const data = await response.json();

      if (data.data.questionInsert.msg === 'ok') {
        /*
        Dispatch an action to add the new question store
        */
        dispatch(addQuestion(data.data.questionInsert.question));
        console.log('Question "' + { name: name } + '" was created on the server');
      }

      setShowModal(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  /*
  Function to handle closing the modal
  */
  const handleCloseModal = () => {
    setShowModal(false);
  };

  /*
  Event handler for name input change
  */
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  /*
  Event handler for question type selection change
  */
  const handleTypeChange = (event) => {
    setTypeId(event.target.value);
  };

  /*
  Function to add a copy question with question values
  */
  const addCopyQuestion = async () => {
    try {
      const response = await questionInsertMutation(copy.name, props.surveyId, copy.type, props.orderLength + 1);
      const data = await response.json();
      const questionId = data.data.questionInsert.question.id;

      if (data.data.questionInsert.msg === 'ok') {
        console.log('Question ' + data.data.questionInsert.question.name + ' was created on the server');
        dispatch(addQuestion(data.data.questionInsert.question));
      }

      setShowModal(false);

      for (const value of copy.values) {
        try {
          const response = await QuestionValueInsertMutation({ questionId, nameValue: value.name, order: props.orderLength + 1 });
          const data = await response.json();

          if (data.data.questionValueInsert.msg === 'ok') {
            const newProps = data.data.questionValueInsert.question;

            dispatch(insertQuestionValues(newProps));
            console.log('New questionValue "' + data.data.questionValueInsert.question.name + '" was inserted on the server');
          }
        } catch (error) {
          console.error('Error fetching group names:', error);
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <button className="btn btn-success" onClick={() => setShowModal(true)}>
        Insert question
      </button>

      {/* Bootstrap modal settings */}
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
          <Button variant="primary" onClick={addCopyQuestion}>
            Add copy question
          </Button>
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