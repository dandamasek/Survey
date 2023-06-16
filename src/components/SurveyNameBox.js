import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SurveyUpdateButton } from '../actions/SurveyUpdateButton';

function SurveyNameBox(props) {
  const [name, setName] = useState(props.name);
    
  /*
  change const name, direct setName in onChange causing re-rendering
  */
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  /*
  Renders a row with survey name input field and update button 
  */
  return (
    <div className='row'>       
      <div className="col-10">
        <input className="form-control text-center" type="text" key={props.id+"SurveyName"}  value={name} onChange={handleNameChange}/>
      </div>
      
      <div className='col-2'>
        <SurveyUpdateButton  id={props.id} lastchange={props.lastchange} newName={name}/>
      </div>
    </div>

  );
}

export default SurveyNameBox;
