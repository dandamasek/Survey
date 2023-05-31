import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { QuestionUpdateButton } from 'actions/QuestionUpdateButton';
import QuestionValues from './QuestionValues';

function Question(props) {
  const [order, setOrder] = useState(props.question.order);
  const [name, setName] = useState(props.question.name);
  const [type, setType] = useState(props.question.type.id);
  
  // surveyId is Id of survey of this question
  const surveyId = props.surveyId

  const [questionValues, setQuestionValues] = useState(props.question.values);
  

  const questionId = props.question.id;
  const orderLength = questionValues.length;

  // Handle order input change
  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };

  // Handle name input change
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuestionValueChange = (event, index) => {
    const newQuestionValues = [...questionValues];
    newQuestionValues[index] = event.target.value;
    setQuestionValues(newQuestionValues);
  };

  const addQuestionValue = () => {
    setQuestionValues([...questionValues, ""]);
  };

  const removeQuestionValue = (index) => {
    const newQuestionValues = [...questionValues];
    newQuestionValues.splice(index, 1);
    setQuestionValues(newQuestionValues);
  };

  // Pass questionValues state and relevant functions as props to QuestionValues component
  const questionValuesProps = {
    questionValues,
    setQuestionValues,
    handleQuestionValueChange,
    addQuestionValue,
    removeQuestionValue,
    questionId,
    orderLength
  };

  return (
    <>
      <tr key={props.question.id + "tr"}>
        <td>
          {/* Order input */}
          <input
            className="form-control"
            onChange={handleOrderChange}
            value={order}
            key={props.question.id + "Question order"}
          />
        </td>
        <td>
          {/* Question input */}
          <input
            className="form-control"
            onChange={handleNameChange}
            value={name}
            key={props.question.id + "Question name"}
          />
        </td>
        <td>
          <select
            className="form-select"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="949d74a2-63b1-4478-82f1-e025d8bc6c8b">Otevřená</option>
            <option value="ad0f53fb-240b-47de-ab1d-871bbde6f973">Uzavřená</option>
            <option value="2a6a1731-1efa-4644-a1d8-5848e4b29ce5">Škála</option>
          </select>
          {/* decision for Uzavřená and Škála */}
          {type !== "949d74a2-63b1-4478-82f1-e025d8bc6c8b" && (
            <QuestionValues {...questionValuesProps} />
          )}
        </td>
        <td>
          {/* Button component */}
          <QuestionUpdateButton
            lastchange={props.question.lastchange}
            id={props.question.id}
            name={name}
            order={order}
            type={type}
            surveyId={surveyId}
            key={props.question.id + "ChangeValue"}
          />
        </td>
      </tr>
    </>
  );
}

export default Question;
