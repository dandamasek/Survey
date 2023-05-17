import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from '../redux/store';
import CreateQuestionContainer from '../components/CreateQuestionContainer';
import RenderQuestions from "./RenderQuestions";

import CreateIdContainer from './CreateIdContainer';

function CreateQuestions() {
    const [formFields, setFormFields] = useState([
        {name: '', typeOfAnswer: 'text', order: "0"},
    ])

    const [formRedux, setForm] = useState(<div></div>)

    const handleFormChange = (event, index) => {
       
        let data = [...formFields];

        if (event.target.name === 'order') {

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
    <>
        <form onSubmit={submit}>
            {formFields.map((form, index) => {
                return (
                    <table class="table-responsive-sm d-flex justify-content-center" key={index}>
                        <thead>
                            <tr>
                                <th>Question: </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class='col-xs-2'>
                                    
                                    <select name='order' class="form-select" value={form.order} onChange={event=>handleFormChange(event, index)}>
                                        {renderIndexOfFields()}

                                    </select>
                                </td>
                                <td class='col-xs-2'>
                                    <input
                                        class="form-control" name = 'name' placeholder='Name of Question' onChange={event => handleFormChange(event, index)}
                                        value={form.name}
                                    />
                                </td>
                                <td class='col-xs-1'>
                                    <select class="form-select" name='typeOfAnswer' value={form.typeOfAnswer} onChange={event => handleFormChange(event, index)}>
                                        <option>text</option>
                                        <option>radiobutton</option>
                                        <option>select</option>
                                    </select>
                                </td>
                                <td class='col-xs-1'>
                                    <button class="btn btn-danger " onClick={() => removeFields(index)}>Remove</button>
                                </td>
                            </tr>
                        </tbody>
                        </table>   
                )
            })}
        </form>
       <>{formRedux}</> 
      <button class="btn btn-success border" onClick={addFields}>Add more</button>
      <br />
      <button class="btn btn-primary border" onClick={submit}>Submit</button>
      {/* <RenderQuestions /> */}
      </>
  )
}

export default CreateQuestions
