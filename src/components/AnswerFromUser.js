import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AnswerValueUpdateButton } from '../actions/AnswerValueUpdateButton';

export function AnswerFromUser(props) {
  const [AnswerValue, setAnswerValue] = useState(props.answer.value !== null ? props.answer.value : "PRAZDNY");

  const question = props.question;

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (event.target.type === 'checkbox') {
      if (event.target.checked) {
        // Add the selected value to AnswerValue
        setAnswerValue((prevValue) => {
          if (prevValue.includes(value)) {
            // If the value already exists, return the previous value
            return prevValue;
          } else {
            // Add the new value to the existing values
            return prevValue ? prevValue + ';' + value : value;
          }
        });
      } else {
        // Remove the unselected value from AnswerValue
        setAnswerValue((prevValue) =>
          prevValue.replace(new RegExp(`${value};?`), '')
        );
      }
    } else {
      // Handle text input changes
      setAnswerValue(value);
    }
  };


  const renderQuestionByType = () => {
    switch (props.question.type.id) {
      // Škála
      case '2a6a1731-1efa-4644-a1d8-5848e4b29ce5':
        return (
          <div>
            {question.values.map((value) => (
              <div key={value.id}>
                <input
                  type="checkbox"
                  value={value.name}
                  onChange={handleInputChange}
                  checked={AnswerValue.includes(value.name)}
                />
                <label>{value.name}</label>
              </div>
            ))}
          </div>
        );
      // Otevřené
      case '949d74a2-63b1-4478-82f1-e025d8bc6c8b':
        return (
          <div>
            Otevřené
            <div>
              <input
                type="text"
                value={AnswerValue}
                onChange={handleInputChange}
              />
            </div>
          </div>
        );
      // Uzavřené
      case 'ad0f53fb-240b-47de-ab1d-871bbde6f973':
        return (
          <div>
            Uzavřené
            {question.values.map((value) => (
              <div key={value.id}>
                <input
                  type="checkbox"
                  name={question.id}
                  value={value.name}
                  onChange={handleInputChange}
                  checked={AnswerValue.includes(value.name)}
                />
                <label>{value.name}</label>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {renderQuestionByType()}
      <AnswerValueUpdateButton
        id={props.answer.id}
        lastchange={props.answer.lastchange}
        value={AnswerValue}
      />
    </>
  );
}
