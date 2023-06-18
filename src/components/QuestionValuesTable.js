import React from 'react';
import { QuestionValueInsertButton } from '../actions/QuestionValueInsertButton';
import QuestionValue from './QuestionValue';

/**
 * Component used for inserting and updating question values.
 * @param {object} props - The component props containing the questionValues, questionId, and orderLength.
 * @returns {JSX.Element} - The rendered component.
 */
function QuestionValues(props) {
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
