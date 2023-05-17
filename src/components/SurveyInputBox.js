import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function InputBoxWithName(props) {
  return (
    <table className="table">
        <tbody>
            <tr>
                <td>
                    <input class="form-control" value={props.name}></input>
                </td>
            </tr>
        </tbody>
    </table>
  )
}

export default InputBoxWithName
