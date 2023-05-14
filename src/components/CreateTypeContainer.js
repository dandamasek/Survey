import React, {useState} from 'react'
import { connect } from 'react-redux'
import { createType } from '../redux'

function CreateTypeContainer(props) {
    const [text, setText] = useState('')

  return (
    <>
      <>Type of anwser: </>

      <select value={props.nameType} onChange={e=>props.createType(e.target.value)}>
        <option>text</option>
        <option>radiobutton</option>
        <option>select</option>

      </select>
    </>

  )
}


const mapStateToProps = state => {
  return {
    nameType: state.type.nameType
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createType: text => dispatch(createType(text))
  }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateTypeContainer)