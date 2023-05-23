import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ShowAnswerTable(props) {
  return (
    <table className="table">
      <tbody>
        {props.questions.map((question) => (
          <tr key={question.order}>
            <td className="col-2">
              <div className="col-2">
                <input
                  className="form-control"
                  defaultValue={question.order}
                  disabled={true}
                />
              </div>
            </td>
            <td>
              <input
                className="form-control"
                defaultValue={question.name}
                disabled={true}
              />
            </td>
            <td>
              {
                question.answers.map((answer) => (
                  <div>
                    <input
                      className="form-control"
                      defaultValue={answer.value}
                      disabled={true}
                    />
                  </div>
                ))}
             
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ShowAnswerTable;