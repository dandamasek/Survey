import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AnswerValueUpdateButton } from '../actions/AnswerValueUpdateButton';
import { AnswerUpdateAsweredButton } from '../actions/AnswerUpdateAsweredButton';

/**
 * Component for rendering an answer from a user.
 * @param {Object} props - The component props.
 * @param {Object} props.question - The question object.
 * @param {Object} props.answer - The answer object.
 * @returns {JSX.Element} - The rendered component.
 */
export function AnswerFromUser(props) {
  const [AnswerValue, setAnswerValue] = useState(props.answer.value !== null ? props.answer.value : "");

  const question = props.question;

  /**
   * Event handler for input changes.
   * @param {Object} event - The input change event.
   */
  const handleInputChange = (event) => {
    const value = event.target.value;
    if (event.target.type === 'checkbox') {
      if (event.target.checked) {
        setAnswerValue((prevValue) => {
          if (prevValue.includes(value)) {
            return prevValue;
          } 
          else {
            return prevValue ? prevValue + ';' + value : value;
          }
        });
      } else {
        setAnswerValue((prevValue) =>
          prevValue.replace(new RegExp(`${value};?`), '')
        );
      }
    } else {
      setAnswerValue(value);
    }
  };

  /**
   * Renders the question based on its type.
   * @returns {JSX.Element} - The rendered question.
   */
  const renderQuestionByType = () => {
    switch (props.question.type.id) {
      case '2a6a1731-1efa-4644-a1d8-5848e4b29ce5': // Škála
        return (
          <div>
            <h5>Škála</h5>
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
      case '949d74a2-63b1-4478-82f1-e025d8bc6c8b': // Otevřené
        return (
          <div>
            <h5>Otevřené</h5>
            <div>
              <input
                type="text"
                value={AnswerValue}
                onChange={handleInputChange}
              />
            </div>
          </div>
        );
      case 'ad0f53fb-240b-47de-ab1d-871bbde6f973': // Uzavřené
        return (
          <div>
              <h5>Uzavřené</h5>
            {question.values.map((value) => (
              <div key={value.id}>
                <input
                  type="radio"
                  name={question.id}
                  value={value.name}
                  onChange={handleInputChange}
                  checked={AnswerValue === value.name}
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
    <div>
      {renderQuestionByType()}
      <AnswerValueUpdateButton
        id={props.answer.id}
        lastchange={props.answer.lastchange}
        value={AnswerValue}
      />
      <AnswerUpdateAsweredButton id={props.answer.id}  lastchange={props.answer.lastchange} aswered={true} />
    </div>
  );
}
