import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

/*
Renders a table displaying user information.
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
  
