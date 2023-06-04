import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import QuestionTable from './QuestionTable';
import { QuestionInsertButton } from 'actions/QuestionInsertButton';

  function SurveyQuestionTable(props) {
  const orderLength = [...props.questions].length;

  return (
    <>
        { props.questions.map((question)=>          
          <QuestionTable question={question} surveyId={props.surveyId} key={question.id+"Question"}/>
        )}

        <tr><td><QuestionInsertButton surveyId={props.surveyId} orderLength={orderLength}/></td></tr>
    </>
    
  )
}

export default SurveyQuestionTable
