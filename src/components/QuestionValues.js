import React from 'react';
import { QuestionValueInsertButton } from '../actions/QuestionValueInsertButton';
function QuestionValues({
  questionValues,
  setQuestionValues,
  handleQuestionValueChange,
  addQuestionValue,
  removeQuestionValue,
  questionId,
  orderLength
  

}) {
  // Map the question values
  const questionValueInputs = questionValues.map((questionValue, index) => (
    <div key={index}>
        <input
            value={questionValue.name}
            onChange={(event) => handleQuestionValueChange(event, index)}
        />
        <QuestionValueInsertButton questionId={questionId} name={questionValue} order={orderLength+1}/>

      {/* <button onClick={() => removeQuestionValue(index)}>Remove</button> */}
    </div>
  ));

  return (
    <div>
      {questionValueInputs}
      <button className="btn btn-primary" onClick={addQuestionValue}>New value</button>
    </div>
  );
}

export default QuestionValues;
