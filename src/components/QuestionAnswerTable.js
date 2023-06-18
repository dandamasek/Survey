import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AnswerFromUser } from './AnswerFromUser';
import { AnswerUpdateAsweredGroupButton } from '../actions/AnswerUpdateAswereGroupButton';

/**
 * Component used to display a table of questions and answers for a specific user.
 * @param {object} props - The component props containing the questions, currentUser, and other data.
 * @returns {JSX.Element} - The rendered component.
 */
function QuestionAnswerTable(props) {
  const sortedQuestions = [...props.questions].sort((a, b) => a.order - b.order);
  return (
    <>
    
      {sortedQuestions.map((question) => {
        return question.answers.map((answer) => {
          if (answer.user.id === props.currentUser.id && answer.expired !== true) {
           
            return (
              <div className='row' key={question.id + "RowQuestionAnswer"}>
                <div className='col'>
                  <input
                    className="form-control"
                    defaultValue={question.order}
                    disabled={true}
                  />
                </div>

                <div className='col'>
                  <input
                    className="form-control"
                    defaultValue={question.name}
                    disabled={true}
                  />
                </div>

                <div className='col'>
                  <AnswerFromUser
                    question={question}
                    answer={answer}
                    currentUser={props.currentUser}
                  />
                </div>
               
              </div>
            );
          } else {
            return null;
          }
        });
        
      })}
      <div>
      <AnswerUpdateAsweredGroupButton questions={sortedQuestions} aswered={true} currentUser={props.currentUser} />
      </div>
    </>
  );
}

export default QuestionAnswerTable;
