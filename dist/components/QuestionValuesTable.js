import React from 'react';
import { QuestionValueInsertButton } from '../actions/QuestionValueInsertButton';
import QuestionValue from './QuestionValue';

/**
 * Component used for inserting and updating question values.
 * @param {object} props - The component props containing the questionValues, questionId, and orderLength.
 * @param {Array} props.questionValues - An array of questionValue objects.
 * @param {string} props.questionId - The ID of the question.
 * @param {number} props.orderLength - The length of the questionValues array.
 * @returns {JSX.Element} - The rendered component.
 */
function QuestionValues(props) {
  const questionValueInputs = props.questionValues.map(questionValue => /*#__PURE__*/React.createElement(QuestionValue, {
    questionValue: questionValue,
    key: questionValue.id
  }));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "row m-2"
  }, questionValueInputs), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement(QuestionValueInsertButton, {
    questionId: props.questionId,
    order: props.orderLength + 1,
    nameValue: " "
  })));
}
export default QuestionValues;