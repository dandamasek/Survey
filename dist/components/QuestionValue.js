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
  const updateQuestionValue = event => {
    setName(event.target.value);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "row m-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/React.createElement("input", {
    value: name,
    onChange: updateQuestionValue
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/React.createElement(QuestionValueUpdateButton, {
    lastchange: props.questionValue.lastchange,
    id: props.questionValue.id,
    name: name,
    order: order + 1
  })));
}
export default QuestionValue;