import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function SurveyQuestionTable(props) {
  return (
    <>

      { props.questions.map((question)=>          
        <tr>
          <td > 
         <input className="form-control" defaultValue={question.order} key={question.id} />
         </td>
          <td><input className="form-control" defaultValue={question.name}></input> </td> 
          <td> <button class = "btn btn-outline-dark">Change question</button></td>
        </tr>
          )}
        
    </>
  )
}

export default SurveyQuestionTable
