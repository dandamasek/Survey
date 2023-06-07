import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import QuestionTable from './QuestionTable';
import { QuestionInsertButton } from 'actions/QuestionInsertButton';

  function SurveyQuestionTable(props) {
  const orderLength = [...props.questions].length;

  const sortedQuestions = [...props.questions].sort((a, b) => a.order - b.order);

  return (
    <>
        { 

        sortedQuestions.map((question) => (
          <QuestionTable
            question={question}
            surveyId={props.surveyId}
            key={question.id + "Question Table"}
          />
        ))
      
        }

        <tr><td><QuestionInsertButton surveyId={props.surveyId} orderLength={orderLength} key={props.surveyId.id+"Question insert"}/></td></tr>
    </>
    
  )
}

export default SurveyQuestionTable
