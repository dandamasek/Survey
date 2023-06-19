import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


/**
 * Component used to render a table of answer results.
 * @param {Object} props - The component props containing the answer data.
 * @param {Array} props.answers - An array of answer objects.
 * @returns {JSX.Element} - The rendered component.
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
