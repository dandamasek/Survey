import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * Component used to render a table of answer results.
 * @param {Object} props - The component props containing the answer data.
 * @param {Array} props.answers - An array of answer objects.
 * @returns {JSX.Element} - The rendered component.
 */
function AnswerResultsTable(props) {
  return /*#__PURE__*/React.createElement("table", {
    className: "table"
  }, /*#__PURE__*/React.createElement("tbody", null, props.answers.map(answer => /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "col-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-2"
  }, /*#__PURE__*/React.createElement("input", {
    className: "form-control",
    defaultValue: answer.value,
    disabled: true
  })))))));
}
export default AnswerResultsTable;