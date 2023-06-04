import React from 'react';
import { QuestionValueUpdateButton } from 'actions/QuestionValueUpdateButton';
import { useState } from 'react';

// function for insert and update questionValues 
function QuestionValue(props) {

  const [name, setName] = useState(props.questionValue.name);
  const [order, setOrder] = useState(props.questionValue.order);

  const updateQuestionValue = (event) => {
    setName(event.target.value);
  }



  // Map the question values with changing options
  return (
    <div>
        <input
            value={name}
            onChange={updateQuestionValue}
            // onChange={(event) => handleQuestionValueChange(event, index)}
        />
        {/* Button comp for updating questionValue */}
        <QuestionValueUpdateButton lastchange={props.questionValue.lastchange} id={props.questionValue.id} name={name} order={order+1} />
    </div>  
  );
}

export default QuestionValue;
