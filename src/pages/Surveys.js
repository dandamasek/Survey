import React from 'react'

import InputBoxWithName from 'components/SurveyInputBox'
import CreateQuestions from 'components/CreateQuestions'

function Surveys() {


  return (
    <div>
      <InputBoxWithName name={'Anketa A'}/>
      <CreateQuestions />
    </div>
  )
}

export default Surveys
