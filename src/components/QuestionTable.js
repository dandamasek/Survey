import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { QuestionUpdateButton } from 'actions/QuestionUpdateButton';
import QuestionValues from './QuestionValuesTable';
 
// this function is for one specific question from survey

function QuestionTable(props) {
  // question atributes
  const [order, setOrder] = useState(props.question.order);
  const [name, setName] = useState(props.question.name);
  const [type, setType] = useState(props.question.type.id);
  
  // surveyId is Id of survey of this question
  const surveyId = props.surveyId

  // orderLength is number of questionValues length to create new questionValue with order bigger by 1 from others
  const orderLength = props.question.values.length;

  // Handle order input change
  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };

  // Handle name input change
  const handleNameChange = (event) => {
    setName(event.target.value);
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
            key={props.question.id + "Question order"}/>
        </td>
        <td>
          {/* Question name input */}
          <input
            className="form-control"
            onChange={handleNameChange}
            value={name}
            key={props.question.id + "Question name"}/>
        </td>
        <td>
          {/* Select for changing type of question */}
          <select
            className="form-select"
            value={type}
            onChange={(e) => setType(e.target.value)}>
            <option value="949d74a2-63b1-4478-82f1-e025d8bc6c8b">Otevřená</option>
            <option value="ad0f53fb-240b-47de-ab1d-871bbde6f973">Uzavřená</option>
            <option value="2a6a1731-1efa-4644-a1d8-5848e4b29ce5">Škála</option>
          </select>

          {/* decision for Uzavřená and Škála */}
          {type !== "949d74a2-63b1-4478-82f1-e025d8bc6c8b" && (
            // Component for all question values
            <QuestionValues questionValues={props.question.values} orderLength={orderLength} questionId={props.question.id} />
          )}

        </td>
        <td>
          {/* Button component for update question*/}
          <QuestionUpdateButton
            lastchange={props.question.lastchange}
            id={props.question.id}
            name={name} 
            order={order}
            type={type}
            surveyId={surveyId}
            key={props.question.id + "ChangeValue"}/>
        </td>
      </tr>
    </>
  );
}

export default QuestionTable;
