import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * Component used to render a table displaying user information.
 * @param {object} props - The component props containing the currentUser object.
 * @returns {JSX.Element} - The rendered component.
 */
export function UserTable(props) {
    return (
      <div className='row'>
        <div className='col'>
 
          <input className="form-control" type="text" defaultValue={props.currentUser.id} />
          <input className="form-control" type="text" defaultValue={props.currentUser.email} />
        </div>
      </div>
    );
  }
  
