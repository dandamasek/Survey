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
        <tr key={question.id}>
          <td>
            <input
              className="form-control"
              defaultValue={question.order}
              disabled={true}
              key={question.id + 'Question order'}
            />
          </td>
          <td>
            <input
              className="form-control"
              defaultValue={question.name}
              disabled={true}
              key={question.id + 'Question name'}
            />
          </td>
          
          <td>
            <AnswerFromUser
              question={question}
              currentUser={props.currentUser}
              key={question.id + 'Question change'}
            />
          </td>
        </tr> 
      ))}
    </>
  );
}

export default QuestionAnswerTable;