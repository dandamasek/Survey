import React from 'react'

function TableWithAnswers(props) {
    
    // const dataName = props.data.map(({questions}) => <tr>{questions.name}</tr>)
    console.log(props.data)
   
    return (
        <div>
        <table>
            <tbody>
                <td>{props.data.name}</td>
                <td>{props.data.birthdate}</td>
                <td>{props.data.color}</td>
                <td>{props.data.email}</td>
                <td>{props.data.password}</td>

            </tbody>
        </table>
        </div>
    )
}

export default TableWithAnswers;
