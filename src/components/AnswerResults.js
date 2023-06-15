import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



/*
Renders a table to display answer results.
*/
function AnswerResultsTable(props) {

  return (
    <table className="table">
    <tbody>
      {props.answers.map((answer) => (
        <tr >
          <td class = "col-2">
            <div class="col-2"><input className="form-control " defaultValue={answer.value} disabled={true} /></div>
          </td>
        
          
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default AnswerResultsTable
