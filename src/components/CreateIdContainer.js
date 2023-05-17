import React, {useState} from 'react'
import { connect } from 'react-redux'
import { createQuestions } from '../redux'
import { createId } from '../redux'


function CreateIdContainer(props) {
    const [titleText, setTitleText] = useState(props.inData)

    const Update = () => {
        props.create(props.inData)
        setTitleText(props.inData)
    }

  return (
    Update()
    // <>
    //   <>Title: {props.inData.name} {props.question}</>
    //   <input type='text' value = {titleText} onChange={e => setTitleText(e.target.value)} /> 
    //   <button onClick={() =>props.createQuestions(props.inData)}>Add</button>
    // </>
    
  )
}


const mapStateToProps = state => {
  return {
    questions: state.survey.question
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createQuestions: titleText => dispatch(createQuestions(titleText))
  }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateIdContainer)