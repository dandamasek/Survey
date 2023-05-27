import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { QuestionUpdateButton } from 'actions/QuestionUpdateButton';

function Question(props) {
  const [order, setOrder] = useState(props.question.order);
  const [name, setName] = useState(props.question.name);
  const [type, setType] = useState(props.question.type.id);
  const [questionValues, setQuestionValues] = useState([""]);

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

  // Map the question values
  const questionValueInputs = questionValues.map((questionValue, index) => (
    <div key={index}>
      <input
        value={questionValue}
        onChange={(event) => handleQuestionValueChange(event, index)}
      />
      <button onClick={() => removeQuestionValue(index)}>Remove</button>
    </div>
  ));

  return (
    <>
      <tr key={props.question.id + "tr"}>
        <td>
          {/* Order input */}
          <input
            className="form-control"onChange={handleOrderChange} value={order} key={props.question.id + "Question order"} />
        </td>
        <td>
          {/* Question input */}
          <input className="form-control" onChange={handleNameChange} value={name} key={props.question.id + "Question name"} />
        </td>
        <td>
          <select
            className="form-select" value={type} onChange={(e) => setType(e.target.value)}>
            <option value="949d74a2-63b1-4478-82f1-e025d8bc6c8b">Otevřená</option>
            <option value="ad0f53fb-240b-47de-ab1d-871bbde6f973">Uzavřená</option>
            <option value="2a6a1731-1efa-4644-a1d8-5848e4b29ce5">Škála</option>
          </select>
          {/* decision for Uzavřená and Škála */}
          {type !== "949d74a2-63b1-4478-82f1-e025d8bc6c8b" && (
            <div>
              {questionValueInputs}
              <button onClick={addQuestionValue}>Add Value</button>
            </div>
          )}
        </td>
        <td>
          {/* Button component */}
          <QuestionUpdateButton lastchange={props.question.lastchange} id={props.question.id} name={name} order={order}  key={props.question.id + "ChangeValue"}/>
        </td>
      </tr>
    </>
  );
}

export default Question;
