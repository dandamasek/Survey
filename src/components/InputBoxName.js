import React, {useState} from "react";
import { Button } from "react-bootstrap";



function AddDynamicInput() {
    const [question,setQuestion] = useState([]);
    const [questionPref,setQuestionPref] = useState([])

    const [nameOfQuestion,setNameOfQuestion] = useState();
    const [typeOfAnswer,setTypeOfAnswer] = useState();


    const handleAdd = () => {
        const abc=[...question,[]]
        setQuestion(abc)
    }

    const handleDelete = (i) => {
        const deleteVal = [...question]
        deleteVal.splice(i,1)

        setQuestion(deleteVal)
    }

    const handleSubmit = (i) => {
        const inputdata=[...questionPref]
        const pomoc = [nameOfQuestion, typeOfAnswer]

        inputdata[i]=pomoc;
        

        console.log(nameOfQuestion)
        console.log(typeOfAnswer)

        setQuestionPref(pomoc)
    }

    console.log(question)


    return(
        <>
        <button onClick={() => handleAdd()}>Create question</button>
            {question.map((data,i) =>{
                return(
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
            })}
        </>
    )


}

export default AddDynamicInput;