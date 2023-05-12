import React from 'react'
import QuestionData from '../data/QuestionData';

import {Table} from "react-bootstrap"

function ShowQuestion () {
  return (
    QuestionData.map( record => {
        return(
            
                <Table>
                <td>{record.id}</td>
                <td>{record.name}</td>
                <td>{record.order}</td>
                <td>{record.answer}</td>
                </Table>
           
        )
    })

  )
}

export default ShowQuestion;
