import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function SurveyQuestionTable(props) {
  return (
    <>

      { props.questions.map((question)=>          
        <tr>
          <td class ="col-2 "> 
         <div class ="col-2" ><input className="form-control" defaultValue={question.order} key={question.id} /></div>
         </td>
          <td class = "col-4"> <div><input className="form-control" defaultValue={question.name}></input> </div></td> 
          <td > <button class = "btn btn-outline-dark">Change question</button></td>
        </tr>
          )}
        
    </>
  )
}

export default SurveyQuestionTable
