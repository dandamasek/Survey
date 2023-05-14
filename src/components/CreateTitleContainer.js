import React, {useState} from 'react'
import { connect } from 'react-redux'
import { createTitle } from '../redux'

function CreateTitleContainer(props) {
    const [titleText, setTitleText] = useState('')

  return (
    <>
      <>Title: {props.nameTitle}</>
      <input type='text' value = {titleText} onChange={e => setTitleText(e.target.value)} /> 
      <button onClick={() =>props.createTitle(titleText)}>Add</button>
    </>
  )
}


const mapStateToProps = state => {
  return {
    nameTitle: state.title.nameTitle
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createTitle: titleText => dispatch(createTitle(titleText))
  }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateTitleContainer)