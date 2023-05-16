import React, { useState } from 'react';
import store from '../redux/store';

const RenderQuestions = () => {
  const questions = store.getState().createQuestion.questions;

  const [selectedOptions, setSelectedOptions] = useState({});

  const handleRadioButtonChange = (questionId, optionValue) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [questionId]: optionValue,
    }));
  };

  const tableRows = [];
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];

    if (question.typeOfAnswer === 'text') {
      tableRows.push(
        <table key={question.id}>
        <tr >
          <th>{question.name}</th>
         
          </tr>
          <tr>
          <td>
            <input type="text" />
          </td>
        </tr>
        </table>
      );
    } else if (question.typeOfAnswer === 'radiobutton') {
      tableRows.push(
        <table key={question.order}>
        <tr >
          <th>{question.name}</th >
          </tr>
          <tr>
          <td>
            <label>
              <input
                type="radio"
                name={question.id}
                value="option1"
                checked={selectedOptions[question.id] === 'option1'}
                onChange={() => handleRadioButtonChange(question.id, 'option1')}
              />
              Option 1
            </label>
            </td>
            </tr>
            <tr>
              <td>
            <label>
              <input
                type="radio"
                name={question.id}
                value="option2"
                checked={selectedOptions[question.id] === 'option2'}
                onChange={() => handleRadioButtonChange(question.id, 'option2')}
              />
              Option 2
            </label>
          </td>
        </tr>
        </table>
      );
    } else if (question.typeOfAnswer === 'select') {
      tableRows.push(
        <table key={question.order}>
        <tr >
          <th>{question.name}</th>
          </tr>
          <tr>
          <td>
            <label>
              <input type="checkbox" name={question.id} value="option1" />
              Option 1
            </label>
            </td>
            </tr>
            <tr>
             <td>
            <label>
              <input type="checkbox" name={question.id} value="option2" />
              Option 2

            </label>
            </td>
            </tr>
<tr>
  <td>
  <label>
              <input type="checkbox" name={question.id} value="option3" />
              Option 3
            </label>
  </td>
</tr>
           
        </table>
      );
    }
  }

  return (
    
    tableRows
  );
};

export default RenderQuestions;