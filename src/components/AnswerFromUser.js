import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AnswerValueUpdateButton } from '../actions/AnswerValueUpdateButton';

export function AnswerFromUser(props) {
  const [answer, setAnswer] = useState([]);
  const [id, setId] = useState();
  const [lastChange, setLastChange] = useState();

  useEffect(() => {
    try{
      const matchingAnswer = props.question.answers.find(
        (answer) => answer.user.id === props.currentUser.id
      );
    if (matchingAnswer) {
      setAnswer(matchingAnswer.value.split(','));
      setId(matchingAnswer.id);
      setLastChange(matchingAnswer.lastchange);
    } else {
      setAnswer([]);
      setId(null);
      setLastChange(null);
    }
  } catch (error) {}

  }, [props.question.answers, props.currentUser]);

  const handleInputChange = (event) => {
    setAnswer(event.target.value.split(','));
  };

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    setAnswer((prevAnswer) => {
      if (isChecked) {
        return [...prevAnswer, value];
      } else {
        return prevAnswer.filter((item) => item !== value);
      }
    });
  };

  const handleRadioChange = (event) => {
    setAnswer([event.target.value]);
  };

  const renderQuestionByType = () => {
    const { question } = props;
    switch (question.type.name) {
      case 'Škála':
        return (
          <div>
            Škála
            {question.values.map((value) => (
              <div key={value.id}>
                <input
                  type="checkbox"
                  value={value.name}
                  checked={answer.includes(value.name)}
                  onChange={handleCheckboxChange}
                />
                <label>{value.name}</label>
              </div>
            ))}
          </div>
        );
      case 'Otevřené':
        return (
          <div>
            Otevřené
            <div>
              <input
                type="text"
                value={answer.join(',')}
                onChange={handleInputChange}
              />
            </div>
          </div>
        );
      case 'Uzavřené':
        return (
          <div>
            Uzavřené
            {question.values.map((value) => (
              <div key={value.id}>
                <input
                  type="radio"
                  name={question.id}
                  value={value.name}
                  checked={answer[0] === value.name}
                  onChange={handleRadioChange}
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
      <AnswerValueUpdateButton id={id} lastchange={lastChange} value={answer.join(',')} />
    </>
  );
}