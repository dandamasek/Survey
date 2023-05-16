import React from 'react';
import { useSelector } from 'react-redux';
import store from '../redux/store';

const RenderQuestions = () => {
  // const questions = useSelector(state => state.createQuestions ? state.createQuestions.questions : []);
  console.log(store.getState().createQuestion.questions);
  const question = store.getState().createQuestion.questions

  console.log(question)
  console.log('get staaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaate');




  const renderTable = question => {
    if (question.typeofanswer === 'text') {
      return (
        <tr key={question.id}>
          <td>{question.question}</td>
          <td><input type="text" /></td>
        </tr>
      );
    } else if (question.typeofanswer === 'radiobutton') {
      return (
        <tr key={question.id}>
          <td>{question.question}</td>
          <td>
            <label>
              <input type="radio" name={question.id} value="option1" />
              Option 1
            </label>
            <br />
            <label>
              <input type="radio" name={question.id} value="option2" />
              Option 2
            </label>
          </td>
        </tr>
      );
    } else if (question.typeofanswer === 'select') {
      return (
        <tr key={question.id}>
          <td>{question.question}</td>
          <td>
            <label>
              <input type="checkbox" name={question.id} value="option1" />
              Option 1
            </label>
            <br />
            <label>
              <input type="checkbox" name={question.id} value="option2" />
              Option 2
            </label>
            <br />
            <label>
              <input type="checkbox" name={question.id} value="option3" />
              Option 3
            </label>    
          </td>
        </tr>
      );
    }
  };
  

  return (
    <table>
      <thead>
        <tr>
          <th>Question</th>
          <th>Answer</th>
        </tr>
      </thead>
      <tbody>
        {/* {questions.map(question => renderTable(question))} */}
        
      </tbody>
    </table>
  );
};

export default RenderQuestions;