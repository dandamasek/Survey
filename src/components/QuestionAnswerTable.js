import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AnswerFromUser } from './AnswerFromUser';

function QuestionAnswerTable(props) {
  if (!props.questions) {
    return null; // or render a loading indicator, error message, or fallback component
  }

  return (
    <>
      {props.questions.map((question) => (
        <div className='row' key={question.id}>
          <div className='col'>
            <input
              className="form-control"
              defaultValue={question.order}
              disabled={true}
              key={question.id + 'Question order'}
            />
          </div>
          <div className='col'>
            <input
              className="form-control"
              defaultValue={question.name}
              disabled={true}
              key={question.id + 'Question name'}
            />
          </div>
          
          <div className='col'>
            <AnswerFromUser
              question={question}
              currentUser={props.currentUser}
              key={question.id + 'Question change'}
            />
          </div>
          
        </div> 
      ))}
    </>
  );
}

export default QuestionAnswerTable;