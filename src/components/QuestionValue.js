import React from 'react';
import { QuestionValueUpdateButton } from 'actions/QuestionValueUpdateButton';
import { useState } from 'react';

/**
 * Component used for inserting and updating question values.
 * @param {object} props - The component props containing the questionValue object.
 * @param {object} props.questionValue - The questionValue object.
 * @returns {JSX.Element} - The rendered component.
 */
function QuestionValue(props) {
  const [name, setName] = useState(props.questionValue.name);
  const [order] = useState(props.questionValue.order);

  /**
   * Handles the change event of the question value input.
   * @param {Object} event - The event object.
   */
  const updateQuestionValue = (event) => {
    setName(event.target.value);
  };

  return (
    <div className='row m-1'>
      <div className='col-6'>
        <input
          value={name}
          onChange={updateQuestionValue}
        />
      </div>

      <div className='col-6'>
        <QuestionValueUpdateButton
          lastchange={props.questionValue.lastchange}
          id={props.questionValue.id}
          name={name}
          order={order + 1}
        />
      </div>
    </div>
  );
}

export default QuestionValue;
