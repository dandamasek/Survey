import React, {useState} from 'react'
import { connect } from 'react-redux'
import { createQuestions } from '../redux'
import { createId } from '../redux'


function CreateQuestionsContainer(props) {
    const [questionData, setquestionData] = useState(props.inData)
    const [idData, setIdData] = useState('Hi')

    const Update = () => {
        props.createQuestions(props.inData)
        props.createId('Ahoj')
    }

  return (
    Update()
    // <>
    //   <>Title: {props.inData.name} {props.question}</>
    //   <input type='text' value = {questionData} onChange={e => setquestionData(e.target.value)} /> 
    //   <button onClick={() =>props.createQuestions(props.inData)}>Add</button>
    // </>
    
  )
}


const mapStateToProps = state => {
  return {
    questions: state.survey.questions

  }
}

const mapDispatchToProps = dispatch => {
  return {
    createQuestions: questionData => dispatch(createQuestions(questionData)),
    createId: idData => dispatch(createId(idData))
  }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateQuestionsContainer)