import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * Component used to render a table displaying user information.
 * @param {object} props - The component props containing the currentUser object.
 * @returns {JSX.Element} - The rendered component.
 */
function UserTable(props) {
  return (
    <div className="row">
      <div className="col">
        <table className="table">
          <tbody>
            <tr>
              <td>ID</td>
              <td>{props.currentUser.id}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{props.currentUser.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserTable;
