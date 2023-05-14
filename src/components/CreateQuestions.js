import React, { useState } from 'react'

function CreateQuestions() {
    const [formFields, setFormFields] = useState([
        {name: '', typeOfAnswer: '', order: "0"},
    ])

    const handleFormChange = (event, index) => {
       
        const sortedFormFields = [...formFields].sort((a, b) => a.order - b.order);
        let data = [...sortedFormFields];
        
        data[index][event.target.name] = event.target.value;
        
        setFormFields(data);
    } 

    


    const submit = (e) => {
        e.preventDefault();
        console.log(formFields)
    }

    const addFields = () => {
        let object = {
            name: '', 
            typeOfAnswer: '',
            order: formFields.length
        }
    
        setFormFields([...formFields, object])
    }

    const removeFields = (index) => {
        let data = [...formFields];
        data.splice(index, 1)
        setFormFields(data)
    }

    const renderIndexOfFields = () => {
        const arrayIndexes = [""]
        for (var i = 0; i < formFields.length; i++) {
            arrayIndexes[i] = <option>{i}</option>
        }
        return arrayIndexes

    }

  return (
    <div className="App">
        <form onSubmit={submit}>
            {formFields.map((form, index) => {
                return (
                    <div key = {index}>

                        <select name='order' value={form.order} onChange={event=>handleFormChange(event, index)}>
                            {renderIndexOfFields()}

                        </select>

                        <input
                            name = 'name'
                            placeholder='Name of Question'
                            onChange={event => handleFormChange(event, index)}
                            value={form.name}
                        />
            
                        <select name='typeOfAnswer'  value={form.typeOfAnswer} onChange={event => handleFormChange(event, index)}>
                            <option>text</option>
                            <option>radiobutton</option>
                            <option>select</option>

                        </select>

                        <button onClick={() => removeFields(index)}>Remove</button>
                    </div>
                )
            })}
        </form>

      <button onClick={addFields}>Add more</button>
      <br />
      <button onClick={submit}>submit</button>

    </div>
  )
}

export default CreateQuestions
