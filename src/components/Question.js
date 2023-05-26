import React, { useState, useEffect, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { QuestionUpdateButton } from 'actions/QuestionUpdateButton';

function Question(props) {
  const [order, setOrder] = useState(props.question.order);
  const [name, setName] = useState(props.question.name);


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
            key={props.question.id + "Question order"}
          />
        </td>
        <td>
          {/* Question input */}
          <input
            className="form-control"
            onChange={handleNameChange}
            value={name} // Use defaultValue instead of value
            key={props.question.id + "Question name"}
          />
        </td>
        <td>
          {/* Button component */}
          <QuestionUpdateButton 
            lastchange={props.question.lastchange} 
            id={props.question.id} 
            name={name}
            order={order}
            key={props.question.id + "ChangeValue"} 
          />
        </td>
      </tr>
    </>
  );
}

export default Question;
