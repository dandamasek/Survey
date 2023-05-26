import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {AnswerFromUser} from './AnswerFromUser';


function QuestionAnswerTable(props) {

  return (
    <>
      {props.questions.map((question) => (
        <tr key={question.id}>

          <td><input className="form-control " defaultValue={question.order} disabled={true} key={question.id+"Question order"} /></td>
          <td><input className="form-control" defaultValue={question.name} disabled={true} key={question.id+"Question name"}/></td>
          <AnswerFromUser question={question} currentUser={props.currentUser} key={question.id + "Question change"}/>
        </tr>
      ))}
  </>
  )
}

export default QuestionAnswerTable
