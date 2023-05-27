import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SurveyUpdateButton } from '../actions/SurveyUpdateButton';

function SurveyNameBox(props) {
  const [name, setName] = useState(props.name);
    
  // change const name, direct setName in onChange causing re-rendering
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  return (
    <tr>       
      <td><input key={props.id+"SurveyName"} className="form-control" value={name} onChange={handleNameChange}/></td>
      <SurveyUpdateButton  id={props.id} lastchange={props.lastchange} newName={name}/>
    </tr>

  );
}

export default SurveyNameBox;
