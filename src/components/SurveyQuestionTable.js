import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import QuestionTable from './QuestionTable';
import { QuestionInsertButton } from 'actions/QuestionInsertButton';
import { AnswerExpiredButton } from 'actions/AnswerExpiredButton';

/**
 * Displays a table of survey questions with options to insert new questions and manage answer expiration.
 * @returns {JSX.Element} - The rendered component.
 */

  function SurveyQuestionTable(props) {
  const orderLength = [...props.questions].length;

  const sortedQuestions = [...props.questions].sort((a, b) => a.order - b.order);

  return (
    <div>
          <div className='row mb-3' >
            <div className='col-1'>
            </div>

              {/* Order headline */}
            <div className='col-2'>
            <h5 className="font-weight-bold">Order</h5>
            </div>
            {/* Question name headline */}
            <div className='col-4'>
            <h5 className="font-weight-bold">Question name</h5>
            </div>

            {/* Question type headline */}
            <div className='col-4'>
              <h5 className="font-weight-bold">Type of question</h5>
            </div>

            <div className='col-1'>
            </div>
          </div>
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

      <div>   
        <AnswerExpiredButton questions={props.questions}/>
      </div>

    </div>


    
  )
}

export default SurveyQuestionTable
