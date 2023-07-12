import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowAnswerTable from '../components/ShowAnswersTable';

/**
 * Component for displaying a dropdown menu of surveys and showing the selected survey's answers.
 * @param {object} props - The component props containing the necessary details.
 * @returns {JSX.Element} - The rendered component.
 * @function 
 */

const AnswerShowButton = props => {
  const [selectedOption, setSelectedOption] = useState('');
  const handleSelectChange = event => {
    const selectedValue = event.target.value;
    const selectedSurvey = props.surveys.find(survey => survey.name === selectedValue);
    if (selectedSurvey && selectedSurvey.name === selectedValue) {
      setSelectedOption(selectedSurvey.name);
    } else {
      setSelectedOption('');
    }
  };

  /*
  Event handler for when an item in the displayed surveys is clicked
  */
  const handleItemClick = survey => {
    setSelectedOption(survey);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Choose a survey:"), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    value: selectedOption,
    onChange: handleSelectChange
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Select an option"), props.surveys.map(survey => /*#__PURE__*/React.createElement("option", {
    key: survey.id,
    value: survey.name
  }, survey.name))), selectedOption && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Selected survey: ", selectedOption), props.surveys.map(survey => selectedOption === survey.name && /*#__PURE__*/React.createElement(ShowAnswerTable, {
    key: survey.id,
    questions: survey.questions
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-primary",
    onClick: () => handleItemClick('')
  }, "Clear Selection")));
};
export default AnswerShowButton;