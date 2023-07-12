import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuestionTable from './QuestionTable';
import { QuestionInsertButton } from '../actions/QuestionInsertButton';
import { AnswerExpiredButton } from '../actions/AnswerExpiredButton';

/**
 * Displays a table of survey questions with options to insert new questions and manage answer expiration.
 * @param {object} props - The component props containing the surveyId and questions.
 * @returns {JSX.Element} - The rendered component.
 */
function SurveyQuestionTable(props) {
  const orderLength = props.questions.length;
  const sortedQuestions = [...props.questions].sort((a, b) => a.order - b.order);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "row mb-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-1"
  }), /*#__PURE__*/React.createElement("div", {
    className: "col-2"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "font-weight-bold"
  }, "Order")), /*#__PURE__*/React.createElement("div", {
    className: "col-4"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "font-weight-bold"
  }, "Question name")), /*#__PURE__*/React.createElement("div", {
    className: "col-4"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "font-weight-bold"
  }, "Type of question")), /*#__PURE__*/React.createElement("div", {
    className: "col-1"
  })), sortedQuestions.map(question => /*#__PURE__*/React.createElement("div", {
    className: "row mb-2",
    key: question.id + "Survey question table"
  }, /*#__PURE__*/React.createElement(QuestionTable, {
    question: question,
    surveyId: props.surveyId,
    questions: props.questions
  }))), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement(QuestionInsertButton, {
    surveyId: props.surveyId,
    orderLength: orderLength
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AnswerExpiredButton, {
    questions: props.questions
  })));
}
export default SurveyQuestionTable;