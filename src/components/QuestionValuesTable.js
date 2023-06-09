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
      <div className='row m-2'>
        {questionValueInputs}
      </div>
      
      {/* Button fro creating new empty questionValue */}
      <div className='row'>
      <QuestionValueInsertButton questionId={props.questionId} order={props.orderLength+1} nameValue={" "}/>
      </div>

    </div>
  );
}

export default QuestionValues;
