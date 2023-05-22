import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {AnswerFromUser} from './AnswerFromUser';


function QuestionAnswerTable(props) {

  return (
    <table className="table">
    <tbody>
      {props.questions.map((question) => (
        <tr key={question.id}>
          <td class = "col-2">
            <div class="col-2"><input className="form-control " defaultValue={question.order} disabled={true} /></div>
          </td>
          <td>
            <input className="form-control" defaultValue={question.name} disabled={true} />
          </td>
          <AnswerFromUser question={question} currentUser={props.currentUser} />
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default QuestionAnswerTable
