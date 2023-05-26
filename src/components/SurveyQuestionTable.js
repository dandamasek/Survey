import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Question from './Question';
function SurveyQuestionTable(props) {
 
  return (
    <>
        { props.questions.map((question)=>          
          <Question question={question} surveyId={props.surveyId} orderLength={props.questions.lenght} key={question.id+"Question"}/>
        )}
    </>
    
  )
}

export default SurveyQuestionTable
