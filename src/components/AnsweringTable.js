import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {AnswerFromUser} from './AnswerFromUser';


function QuestionAnswerTable(props) {

  return (
    <>
      { props.questions.map((question)=>          
        <tbody>
        <tr>
          <td> <input className="form-control" defaultValue={question.order} key={question.id} disabled={true} ></input> </td>
          <td> <input className="form-control" defaultValue={question.name} disabled={true}></input> </td> 
          <AnswerFromUser question={question} currentUser={props.currentUser}/> 
        </tr>
        </tbody>
      )}
        
    </>
  )
}

export default QuestionAnswerTable
