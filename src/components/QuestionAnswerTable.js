import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AnswerFromUser } from './AnswerFromUser';

function QuestionAnswerTable(props) {
  if (!props.questions) {
    return null; // or render a loading indicator, error message, or fallback component
  }
console.log(props)
  return (
    <>
      {props.questions.map((question) => {
        return question.answers.map((answer) => {
          if (answer.user.id === props.currentUser.id) {
            console.log("match");

            return (
              <div className='row' key={question.id + "RowQuestionAnswer"}>
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

                <div>
                  <button className='m-2'>Submit Udelat!</button>
                </div>
              </div>
            );
          } else {
            return null;
          }
        });
      })}
    </>
  );
}

export default QuestionAnswerTable;
