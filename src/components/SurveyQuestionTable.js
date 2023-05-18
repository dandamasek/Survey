import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function QuestionRender(props) {
  return (
    <table className="table">
        <tbody>
            <tr>
                { props.questions.map((question)=>          
            <table>
            <tr>
           <td><input value={question.order}></input></td>
           <td> <input class="form-control" value={question.name}></input> </td> 
           </tr>
          </table>
          )}
            </tr>
        </tbody>
    </table>
  )
}

export default QuestionRender
