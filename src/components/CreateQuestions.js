import React, { useState } from 'react'

import { Provider } from 'react-redux';
import store from '../redux/store';
import CreateQuestionContainer from '../components/CreateQuestionContainer';
import RenderQuestions from "./RenderQuestions";

function CreateQuestions() {
    const [formFields, setFormFields] = useState([
        {name: '', typeOfAnswer: 'text', order: "0"},
    ])

    const [formRedux, setForm] = useState(<div>Hi</div>)

    const handleFormChange = (event, index) => {
       
        let data = [...formFields];

        if (event.target.name === 'order') {
            // console.log(index)
            console.log(event.target.value)
            console.log(index)

            const Helper = data[index][event.target.name]
            console.log(Helper)

            data[index][event.target.name] = data[event.target.value][event.target.name]
            data[event.target.value][event.target.name] = Helper
        }

        
        data[index][event.target.name] = event.target.value;
        
        const sortedFormFields = [...data].sort((a, b) => a.order - b.order);
        
        setFormFields(sortedFormFields);
    } 

    const submit = (e) => {
        e.preventDefault();
        console.log(formFields);
        RenderQuestions(formFields);
            const formUpdate =  <div>
                                <Provider store={store}>
                                    <div className="App">
                                
                                    <CreateQuestionContainer inData={formFields}/>
    
                                    </div>
                                </Provider>
                            </div>
    
        setForm(formUpdate);
    
    }
    const addFields = () => {
        let object = {
            name: '', 
            typeOfAnswer: 'text',
            order: formFields.length
        }
    
        setFormFields([...formFields, object])
    }

    const removeFields = (index) => {
        let data = [...formFields];

        data.splice(index, 1)
        
        for (var i = index; i < formFields.length-1; i++) {
            data[i]['order'] =  data[i]['order'] - 1
        }

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

                        <select name='order'  value={form.order} onChange={event=>handleFormChange(event, index)}>
                            {renderIndexOfFields()}

                        </select>

                        <input
                            name = 'name'
                            placeholder='Name of Question'
                            onChange={event => handleFormChange(event, index)}
                            value={form.name}
                        />
            
                        <select name='typeOfAnswer' value={form.typeOfAnswer} onChange={event => handleFormChange(event, index)}>
                            <option>text</option>
                            <option>radiobutton</option>
                            <option>select</option>

                        </select>

                        <button onClick={() => removeFields(index)}>Remove</button>
                    </div>
                )
            })}
        </form>
       <>{formRedux}</> 
      <button onClick={addFields}>Add more</button>
      <br />
      <button onClick={submit}>submit</button>
        
    </div>
  )
}

export default CreateQuestions
