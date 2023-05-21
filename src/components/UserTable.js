import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export function UserTable(props) {
    return (
      <tr>
        <th>
          <input type="text" defaultValue={props.currentUser.id} />
          <input type="text" defaultValue={props.currentUser.email} />
        </th>
      </tr>
    );
  }
  
