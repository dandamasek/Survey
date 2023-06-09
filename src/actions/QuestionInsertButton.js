import React, { useState } from 'react';
import { questionInsertMutation } from '../queries/QuestionInsertMutation';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addQuestion } from 'features/SurveySlice';
import { useSelector } from'react-redux';

import { QuestionValueInsertMutation } from 'queries/QuestionValueInsertMutation';
import {insertQuestionValues} from 'features/SurveySlice';


export const QuestionInsertButton = (props) => {
  const dispatch = useDispatch();
  const copy = useSelector(state => state.copy);

  // showing modal if button pressed
  const [showModal, setShowModal] = useState(false);

  // stored values for questionInsert
  const [name, setName] = useState("");

  // default typeID is Otevřená
  const [typeId, setTypeId] = useState("949d74a2-63b1-4478-82f1-e025d8bc6c8b");


  const fetchData = async () => {
    try {     
      const response = await questionInsertMutation(name,props.surveyId,typeId,props.orderLength+1);
      const data = await response.json(name,typeId,props.surveyId,props.orderLength+1);
      
      if (data.data.questionInsert.msg === "ok") {
        dispatch(addQuestion(data.data.questionInsert.question))
        console.log("Question "+{name: name}+ " was created in server");
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

  const addCopyQuestion = async () => {
    try {
      const response = await questionInsertMutation(copy.name, props.surveyId, copy.type, props.orderLength + 1);
      const data = await response.json();
      const questionId = data.data.questionInsert.question.id;
  
      if (data.data.questionInsert.msg === "ok") {
        dispatch(addQuestion(data.data.questionInsert.question))
        console.log("Question "+{name: name}+ " was created in server");
      }
      setShowModal(false);
      let nameValue = "";

      for (const value of copy.values) {
        try {
          const response = await QuestionValueInsertMutation({questionId,nameValue: value.name ,order: props.orderLength + 1});
          const data = await response.json();
          if (data.data.questionValueInsert.msg === "ok") {
            const newProps = data.data.questionValueInsert.question;
  
            dispatch(insertQuestionValues(newProps));
            console.log('New questionValue"'+data.data.questionValueInsert.question.name+'" insert on server')
          }
        
        } catch (error) {
          console.error('Error fetching group names:', error);
        }
      };

    } catch (error) {
      console.error('Error:', error);
    }

   

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
