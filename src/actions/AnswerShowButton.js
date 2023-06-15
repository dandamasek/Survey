import React, { useState } from 'react';
import { useSelector} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowAnswerTable from '../components/ShowAnswersTable';

const AnswerShowButton = (props) => {
  

  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    const selectedSurvey = props.surveys.find((survey) => survey.name === selectedValue);
    if (selectedSurvey && selectedSurvey.name === selectedValue) {
      setSelectedOption(selectedSurvey.name);
    } else {
      setSelectedOption('');
    }
  };
  const handleItemClick = (survey) => {
    setSelectedOption(survey); 
    
  };

  return (
    <div>
      <label >Choose a survey:</label>
      <select  className="form-select" value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select an option</option>
        {props.surveys.map((survey) => (
          <option key={survey.id} value={survey.name}>
            {survey.name}
          </option>
        ))}
      </select>
      {selectedOption && (
        <div>
          <p>Selected survey: {selectedOption}</p>
          {props.surveys.map((survey) => (
            selectedOption === survey.name && <ShowAnswerTable key={survey.id} questions={survey.questions} />
          ))}
           <button type="button" className="btn btn-primary" onClick={() => handleItemClick('')}>
            Clear Selection
          </button>
        </div>
      )}
    </div>
  );
};

export default AnswerShowButton;