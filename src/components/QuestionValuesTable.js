import React from 'react';
import { QuestionValueInsertButton } from '../actions/QuestionValueInsertButton';
import QuestionValue from './QuestionValue';

// function for insert and update questionValues 
function QuestionValues(props) {

  // Map the question values with changing options
  const questionValueInputs = props.questionValues.map((questionValue) => (
    <QuestionValue questionValue={questionValue} key={questionValue.id}/>
  ));

  return (
    <div>
      {questionValueInputs}
      {/* Button fro creating new empty questionValue */}
      <QuestionValueInsertButton questionId={props.questionId} order={props.orderLength+1}/>
    </div>
  );
}

export default QuestionValues;
