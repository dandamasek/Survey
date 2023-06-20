import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { QuestionUpdateButton } from 'actions/QuestionUpdateButton';
import QuestionValues from './QuestionValuesTable';
import { useDispatch } from 'react-redux';
import { loadData } from 'features/CopySlice';

/**
 * Component used to display a table row for a question.
 * @param {object} props - The component props containing the question data.
 * @param {object} props.question - The question object.
 * @param {string} props.surveyId - The ID of the survey associated with the question.
 * @param {Array} props.questions - An array of all questions.
 * @returns {JSX.Element} - The rendered component.
 */
function QuestionTable(props) {
  const dispatch = useDispatch();

  const [order, setOrder] = useState(props.question.order);
  const [name, setName] = useState(props.question.name);
  const [type, setType] = useState(props.question.type.id);
  const [preOrder, setPreOrder] = useState(order);
  const [occupiedQuestion, setOccupiedQuestion] = useState({});

  const surveyId = props.surveyId;
  const orderLength = props.question.values.length;

  /**
   * Handles the change event of the order input.
   * @param {Object} event - The event object.
   */
  const handleOrderChange = (event) => {
    setOrder(event.target.value);

    props.questions.forEach((question) => {
      if (parseInt(question.order) === parseInt(event.target.value)) {
        setOccupiedQuestion(question);
      }
    });
  };

  /**
   * Copies the question.
   */
  const copyQuestion = () => {
    const lastchange = props.question.lastchange;
    const id = props.question.id;
    const values = props.question.values;

    dispatch(
      loadData({
        lastchange,
        id,
        name,
        order,
        type,
        surveyId,
        values,
      })
    );
  };

  /**
   * Handles the change event of the name input.
   * @param {Object} event - The event object.
   */
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  useEffect(() => {
    setOrder(props.question.order);
  }, [props.question.order]);

  useEffect(() => {
    if (props.question.order !== order) {
      setPreOrder(props.question.order);
    }
  }, [props.question.order, order]);

  return (
    <div className='row'>
      <div className='col-1'>
        <button className="btn btn-outline-dark" onClick={copyQuestion}>Copy question</button>
      </div>

      <div className='col-2'>
        <input
          className="form-control"
          type="text"
          onChange={handleOrderChange}
          value={order}
        />
      </div>

      <div className='col-4'>
        <input
          className="form-control"
          type="text"
          onChange={handleNameChange}
          value={name}
        />
      </div>

      <div className='col-4'>
        <select
          className="form-select"
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="949d74a2-63b1-4478-82f1-e025d8bc6c8b">Otevřená</option>
          <option value="ad0f53fb-240b-47de-ab1d-871bbde6f973">Uzavřená</option>
          <option value="2a6a1731-1efa-4644-a1d8-5848e4b29ce5">Škála</option>
        </select>

        {type !== "949d74a2-63b1-4478-82f1-e025d8bc6c8b" && (
          <QuestionValues
            questionValues={props.question.values}
            orderLength={orderLength}
            questionId={props.question.id}
            key={props.question.id + "Question question values"}
          />
        )}
      </div>

      <div className='col-1'>
        <QuestionUpdateButton
          lastchange={props.question.lastchange}
          id={props.question.id}
          name={name}
          order={order}
          type={type}
          surveyId={surveyId}
          questions={props.questions}
          preOrder={preOrder}
          occupiedQuestion={occupiedQuestion}
        />
      </div>
    </div>
  );
}

export default QuestionTable;
