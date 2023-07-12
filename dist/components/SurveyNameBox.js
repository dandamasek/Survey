import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SurveyUpdateButton } from '../actions/SurveyUpdateButton';

/**
 * Component used to render a row with a survey name input field and an update button.
 * @param {object} props - The component props containing the id, lastchange, and name.
 * @returns {JSX.Element} - The rendered component.
 */
function SurveyNameBox(props) {
  const [name, setName] = useState(props.name);

  /**
   * Event handler for when the survey name input field value changes.
   * @param {object} event - The event object.
   */
  const handleNameChange = event => {
    setName(event.target.value);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-10"
  }, /*#__PURE__*/React.createElement("input", {
    className: "form-control text-center",
    type: "text",
    key: props.id + "SurveyName",
    value: name,
    onChange: handleNameChange
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-2"
  }, /*#__PURE__*/React.createElement(SurveyUpdateButton, {
    id: props.id,
    lastchange: props.lastchange,
    newName: name
  })));
}
export default SurveyNameBox;