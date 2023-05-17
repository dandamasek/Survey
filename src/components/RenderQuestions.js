import React, { useState } from 'react';
import store from '../redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';

const RenderQuestions = () => {
  const questions = store.getState().createQuestion.questions;

  const [selectedOptions, setSelectedOptions] = useState({});
  const [answersArr, setAnswersArr] = useState([
    {   
        id: '',
        value: '',
        answers: false,
        expired: false
  },
  ]);

  const addFields = () => {
    let object = {
        id: '',
        value: '',
        answers: false,
        expired: false
    }
    setAnswersArr([...answersArr, object])
  }

  const handleRadioButtonChange = (questionId, optionValue) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [questionId]: optionValue,
    }));
  };

  const handleFormChange = (event, index) => {  

    try {
      let data = [...answersArr];
  
      data[index][event.target.name] = event.target.value;
      
      setAnswersArr(data);
    }

    catch {
        let object = {
        id: '',
        value: '',
        answers: false,
        expired: false
    }
    setAnswersArr([...answersArr, object])

    let data = [...answersArr];
    console.log(data)

    //  data[index].value = event.target.value;
    
    setAnswersArr(data);
    }

    console.log("Answers from form: ",answersArr);
}

  const tableRows = [];
  for (let index = 0; index < questions.length; index++) {
    const question = questions[index];

    if (question.typeOfAnswer === 'text') {
      tableRows.push(
        <table className="table w-75" key={index}>
        <tr >
          <th>{question.name}</th>
          </tr>
          <tr>
          <td>
            <input type="text" name='value'/>
          </td>
        </tr>
        </table>
      );
    } else if (question.typeOfAnswer === 'radiobutton') {
      tableRows.push(
        <table className='table w-75' key={index}>
        <tr >
          <th>{question.name}</th >
          </tr>
          <tr>
          <td>
            <label class="">
              <input 
                class=""
                type="radio"
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
            <label class="">
              <input
                class=""
                type="radio"
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
        <table className='table w-75' key={index}>
        <tr>
          <th>{question.name}</th>
          </tr>
          <tr>
          <td>
            <label class="">
              <input  type="checkbox" value="option1" />
              Option 1
            </label >
            </td>
            </tr>
            <tr>
             <td>
            <label class="">
              <input type="checkbox" value="option2" />
              Option 2
            </label>
            </td>
            </tr>
            <tr>
              <td>
              <label class="">
                          <input type="checkbox"  value="option3" />
                          Option 3
                        </label>
              </td>
            </tr>
        </table>
      );
    }
  }

  return (
    <>
    {tableRows}
    <div>
      <button class="btn btn-primary">Send answers</button>
    </div>
    </>
  );
};

export default RenderQuestions;