import React from 'react';
import { QuestionValueUpdateButton } from 'actions/QuestionValueUpdateButton';
import { useState } from 'react';

// function for insert and update questionValues 
function QuestionValue(props) {

  const [name, setName] = useState(props.questionValue.name);
  const [order] = useState(props.questionValue.order);

  const updateQuestionValue = (event) => {
    setName(event.target.value);
  }



  // Map the question values with changing options
  return (
    <div className='row m-1'>
        <div className='col-6'>
          <input
              value={name}
              onChange={updateQuestionValue}
              // onChange={(event) => handleQuestionValueChange(event, index)}
          />
        </div>

        {/* Button comp for updating questionValue */}
        <div className='col-6'>
          <QuestionValueUpdateButton lastchange={props.questionValue.lastchange} id={props.questionValue.id} name={name} order={order+1} />
        </div>
    </div>  
  );
}

export default QuestionValue;
