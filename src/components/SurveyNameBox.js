import React, { useState, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonChangeSurveyName } from './ButtonChangeSurveyName';

function SurveyNameBox(props) {
  
  const [dataLoaded , setDataLoaded] = useState(true);
  


  return (
            <tr>
                <td>
                  <input className="form-control" disabled={dataLoaded} value={props.name} ></input>
                </td>
                <td>
                  <button >Change</button>
                </td>
                <td>
                 <ButtonChangeSurveyName id={props.id} lastchange={props.lastchange} newName={props.newName} />
                </td>
            </tr>
  )
}

export default  SurveyNameBox
