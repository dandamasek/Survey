import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SurveyUpdateButton } from '../actions/SurveyUpdateButton';

/**
 * Component used to render a row with a survey name input field and an update button.
 * @param {object} props - The component props containing the id, lastchange, and name.
 * @returns {JSX.Element} - The rendered component.
 */
function SurveyNameBox(props) {
  const [name, setName] = useState(props.name);

  /**
   * Event handler for when the survey name input field value changes.
   * @param {object} event - The event object.
   */
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="row">
      <div className="col-10">
        <input
          className="form-control text-center"
          type="text"
          key={props.id + "SurveyName"}
          value={name}
          onChange={handleNameChange}
        />
      </div>

      <div className="col-2">
        <SurveyUpdateButton id={props.id} lastchange={props.lastchange} newName={name} />
      </div>
    </div>
  );
}

export default SurveyNameBox;
