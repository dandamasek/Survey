import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonChangeSurveyName } from './ButtonChangeSurveyName';

function SurveyNameBox(props) {
  const [name, setName] = useState(props.name);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <tr>
      <td>
        <input
          className="form-control"
          value={name}
          onChange={handleNameChange}
        />
      </td>
      <td>
        <ButtonChangeSurveyName  id={props.id} lastchange={props.lastchange} newName={name}/>
      </td>
    </tr>
  );
}

export default SurveyNameBox;
