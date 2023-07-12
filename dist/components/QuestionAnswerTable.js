import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AnswerFromUser } from './AnswerFromUser';
import { AnswerUpdateAsweredGroupButton } from '../actions/AnswerUpdateAswereGroupButton';

/**
 * Component used to display a table of questions and answers for a specific user.
 * @param {object} props - The component props containing the questions, currentUser, and other data.
 * @param {Array} props.questions - An array of question objects.
 * @param {object} props.currentUser - The current user object.
 * @returns {JSX.Element} - The rendered component.
 */
function QuestionAnswerTable(props) {
  const sortedQuestions = [...props.questions].sort((a, b) => a.order - b.order);

  /**
   * Renders the table rows for each question and answer.
   * @returns {JSX.Element[]} - An array of table row elements.
   */
  const renderQuestionRows = () => {
    return sortedQuestions.map(question => {
      return question.answers.map(answer => {
        if (answer.user.id === props.currentUser.id && answer.expired !== true) {
          return /*#__PURE__*/React.createElement("div", {
            className: "row",
            key: question.id + "RowQuestionAnswer"
          }, /*#__PURE__*/React.createElement("div", {
            className: "col"
          }, /*#__PURE__*/React.createElement("input", {
            className: "form-control",
            defaultValue: question.order,
            disabled: true
          })), /*#__PURE__*/React.createElement("div", {
            className: "col"
          }, /*#__PURE__*/React.createElement("input", {
            className: "form-control",
            defaultValue: question.name,
            disabled: true
          })), /*#__PURE__*/React.createElement("div", {
            className: "col"
          }, /*#__PURE__*/React.createElement(AnswerFromUser, {
            question: question,
            answer: answer,
            currentUser: props.currentUser
          })));
        } else {
          return null;
        }
      });
    });
  };

  /**
   * Renders the QuestionAnswerTable component.
   * @returns {JSX.Element} - The rendered component.
   */
  return /*#__PURE__*/React.createElement(React.Fragment, null, renderQuestionRows(), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AnswerUpdateAsweredGroupButton, {
    questions: sortedQuestions,
    aswered: true,
    currentUser: props.currentUser
  })));
}
export default QuestionAnswerTable;