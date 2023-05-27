import React, { useState } from 'react';
import { questionInsertMutation } from '../queries/QuestionInsertMutation';
import { Modal, Button, Form } from 'react-bootstrap';

export const QuestionInsertButton = (props) => {
  // showing modal if button pressed
  const [showModal, setShowModal] = useState(false);

  // stored values for questionInsert
  const [order, setOrder] = useState('');
  const [name, setName] = useState('');
  const [typeId, setTypeId] = useState("949d74a2-63b1-4478-82f1-e025d8bc6c8b");
  const [questionsValue, setQuestionsValue] = useState([""]);

  const fetchData = async () => {
    try {     
      const response = await questionInsertMutation(name,props.surveyId,typeId,props.orderLength+1);
      const data = await response.json();

      if (data.data.questionInsert.msg === "ok") {
        // const newProps = [props.id, data.data.surveyUpdate.survey.lastchange, data.data.surveyUpdate.survey.name]
        // dispatch(updateSurveyName(newProps));
        // console.log("Survey name: "+props.newName+" is updated in store and server")
      }
      
      // Save each variable to a constant
      // Perform your desired actions with the constants
      console.log('Order:', order);
      console.log('Name:', name);
      console.log('Type:', typeId);

      setShowModal(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTypeChange = (event) => {
    setTypeId(event.target.value);
  };

  const addQuestionValue = (event) => {
    const newQuestionValue = [...questionsValue,event];
    setQuestionsValue(newQuestionValue);
  }

  return (
    <>
      <button className="btn btn-primary" onClick={() => setShowModal(true)}>
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
            {/* decision for škála question */}
            {typeId === '2a6a1731-1efa-4644-a1d8-5848e4b29ce5'&& (

              questionsValue.map(questionValue => 
                <Form.Group>
                  <Form.Label>Question Value:</Form.Label>
                  <Form.Control
                    type="text"
                    value={questionValue}
                    onChange={addQuestionValue(questionValue)}
                  />
                </Form.Group>
              )
            )}

            {/* decision for uzavřená question */}
            {typeId === 'ad0f53fb-240b-47de-ab1d-871bbde6f973'&& (
              <Form.Group>
                <Form.Label>Question Value:</Form.Label>
                <Form.Control
                  type="text"
                  value={questionsValue}
                  onChange={setQuestionsValue}
                />
              </Form.Group>
            )}

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
    </>
  );
};
