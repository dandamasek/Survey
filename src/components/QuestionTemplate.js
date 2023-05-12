import React from 'react'

function QuestionTemplate() {
  return (
    <div>
        Question
        <input onChange={e=>setNameOfQuestion(e.target.value)}/>

        Type of answer:
        <select value={typeOfAnswer} key={i} onChange={e=>setTypeOfAnswer(e.target.value)}>
            <option>text</option>
            <option>radiobutton</option>
            <option>select</option>

        </select>

        <button onClick={()=>handleSubmit(i)}>+</button>
        <button onClick={() =>handleDelete(i)}>-</button>
    </div>
  )
}

export default QuestionTemplate
