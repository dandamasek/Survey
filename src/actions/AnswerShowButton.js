import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowAnswerTable from '../components/ShowAnswersTable';

// Component used to display a dropdown menu of surveys and show the selected survey's answers
const AnswerShowButton = (props) => {
  // State to track the selected survey
  const [selectedOption, setSelectedOption] = useState('');

  // Event handler for when a dropdown option is selected
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    // Find the selected survey based on its name
    const selectedSurvey = props.surveys.find((survey) => survey.name === selectedValue);

    // Update the selected option if a valid survey is found
    if (selectedSurvey && selectedSurvey.name === selectedValue) {
      setSelectedOption(selectedSurvey.name);
    } else {
      setSelectedOption('');
    }
  };

  // Event handler for when an item in the displayed surveys is clicked
  const handleItemClick = (survey) => {
    setSelectedOption(survey);
  };

  return (
    <div>
      <label>Choose a survey:</label>
      <select className="form-select" value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select an option</option>
        {props.surveys.map((survey) => (
          <option key={survey.id} value={survey.name}>
            {survey.name}
          </option>
        ))}
      </select>

      {/* Display the selected survey's name and show its answers */}
      {selectedOption && (
        <div>
          <p>Selected survey: {selectedOption}</p>
          {props.surveys.map((survey) => (
            selectedOption === survey.name && <ShowAnswerTable key={survey.id} questions={survey.questions} />
          ))}

          {/* Button to clear the selected survey */}
          <button type="button" className="btn btn-primary" onClick={() => handleItemClick('')}>
            Clear Selection
          </button>
        </div>
      )}
    </div>
  );
};

export default AnswerShowButton;