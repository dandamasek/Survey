import React, {useState} from 'react'
import store from '../redux/store';

import CreateTitleContainer from './CreateTitleContainer';
import CreateTypeContainer from './CreateTypeContainer';

function CreateQuestion() {
    let currentState = store.getState();
    console.log(currentState.type)

    const [question,setQuestion] = useState([]);

    const handleAdd = () => {
        const abc=[...question,[]]
        setQuestion(abc)
    }

    const handleDelete = (i) => {
        const deleteVal = [...question]
        deleteVal.splice(i,1)

        setQuestion(deleteVal)
    }

  return (
    <div>
     

        <button onClick={() => handleAdd()}>Create question</button>
            {question.map((data,i) => {
                return (
                    <div>
                        <CreateTitleContainer key={i}/>
                        <CreateTypeContainer key={i}/>
                    </div>
                )
            })}
    </div>
  )
}

export default CreateQuestion
