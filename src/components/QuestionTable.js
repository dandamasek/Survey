import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { QuestionUpdateButton } from 'actions/QuestionUpdateButton';
import QuestionValues from './QuestionValuesTable';
import { useDispatch } from 'react-redux';
import { loadData } from 'features/CopySlice';
// this function is for one specific question from survey

function QuestionTable(props) {
  const dispatch = useDispatch();
  // question atributes
  const [order, setOrder] = useState(props.question.order);
  const [name, setName] = useState(props.question.name);
  const [type, setType] = useState(props.question.type.id);
  const [preOrder, setPreOrder] = useState(order);
  
  // surveyId is Id of survey of this question
  const surveyId = props.surveyId

  // orderLength is number of questionValues length to create new questionValue with order bigger by 1 from others
  const orderLength = props.question.values.length;

  // Handle order input change
  const handleOrderChange = (event) => {
    console.log("aktualni",event.target.value);
    console.log("pred",preOrder);
    setPreOrder(order);
    setOrder(event.target.value);
  };

  const copyQuestion = () => {
    const lastchange = props.question.lastchange
    const id = props.question.id
    const values = props.question.values  
    dispatch(loadData({
      lastchange,
      id,
      name,
      order,
      type,
      surveyId,
      values
    }
    ));

  };  
  
  // Handle name input change
  const handleNameChange = (event) => {
    setName(event.target.value);
  };


  return (
    <div className='row' >

        <div className='col-1'>
            <button className="btn btn-outline-dark" onClick={copyQuestion}>Copy</button>

        </div>

          {/* Order input */}
        <div className='col-2'>
          <input 
            className="form-control"
            type="text"
            onChange={handleOrderChange}
            value={order}
            />
        </div>

        {/* Question name input */}
        <div className='col-4'>
          <input
            className="form-control"
            type="text"
            onChange={handleNameChange}
            value={name}
          />
        </div>
       
        {/* Select of question type */}
        <div className='col-4'>
          <select
            className="form-select"
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}>
            <option value="949d74a2-63b1-4478-82f1-e025d8bc6c8b">Otevřená</option>
            <option value="ad0f53fb-240b-47de-ab1d-871bbde6f973">Uzavřená</option>
            <option value="2a6a1731-1efa-4644-a1d8-5848e4b29ce5">Škála</option>
          </select>

          {/* decision for Uzavřená and Škála */}
          {type !== "949d74a2-63b1-4478-82f1-e025d8bc6c8b" && (
            // Component for all question values
            <QuestionValues questionValues={props.question.values} orderLength={orderLength} questionId={props.question.id} key={props.question.id + "Question question values"} />
          )}
        </div>

        <div className='col-1'>
          {/* Button component for update question*/}
          <QuestionUpdateButton
            lastchange={props.question.lastchange}
            id={props.question.id}
            name={name} 
            order={order}
            type={type}
            surveyId={surveyId}
          />
        </div>
    </div>
  );
}

export default QuestionTable;
