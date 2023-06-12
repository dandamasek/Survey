import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import QuestionTable from './QuestionTable';
import { QuestionInsertButton } from 'actions/QuestionInsertButton';

  function SurveyQuestionTable(props) {
  const orderLength = [...props.questions].length;

  const sortedQuestions = [...props.questions].sort((a, b) => a.order - b.order);

  return (
    <div>
        { 
        sortedQuestions.map((question) => (
          <div className='row mb-2' key={question.id + "Survey question table"}>
          <QuestionTable
            question={question}
            surveyId={props.surveyId} 
            questions={props.questions}
          />
          </div>
        ))
        }

       <div className='row'>
          <QuestionInsertButton surveyId={props.surveyId} orderLength={orderLength}/>
        </div>
    </div>
    
  )
}

export default SurveyQuestionTable
