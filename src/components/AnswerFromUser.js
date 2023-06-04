import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AnswerValueUpdateButton } from '../actions/AnswerValueUpdateButton';

export function AnswerFromUser(props) {
  const [Answer, setAnswer] = useState("");
  const [id, setId] = useState(null);
  const [lastchange, setLastchange] = useState(null);

  useEffect(() => {
    const matchingAnswer = props.question.answers.find(
      (answer) => answer.user.id === props.currentUser.id
    );

    if (matchingAnswer) {
      setAnswer(matchingAnswer.value);
      setId(matchingAnswer.id);
      setLastchange(matchingAnswer.lastchange);
    } else {
      setAnswer("");
      setId(null);
      setLastchange(null);
    }
  }, [props.question.answers, props.currentUser]);

  const handleInputChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleRadioChange = (event) => {
    setAnswer(event.target.value);
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
                <input  type="checkbox" value={value.id} />
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
            <input type="text" value={Answer} onChange={handleInputChange} />
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
                  checked={Answer === value.name}
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
     <AnswerValueUpdateButton id={id} lastchange={lastchange} value={Answer} />
    
    </>
  );
}