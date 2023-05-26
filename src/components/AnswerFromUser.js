import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonChangeAnswerValue } from '../actions/ButtonChangeAnswerValue';

export function AnswerFromUser(props) {
  const [Answer, setAnswer] = useState("");
  const [id, setId] = useState(null);
  const [lastchange, setLastchange] = useState(null);

  useEffect(() => {
    const matchingAnswer = props.question.answers.find(
      (answer) => answer.user.id === props.currentUser.id
    );

    if (matchingAnswer) {
      setAnswer(matchingAnswer.value);
      setId(matchingAnswer.id);
      setLastchange(matchingAnswer.lastchange);

    } else {
      setAnswer(null);
    }
  }, [props.question.answers, props.currentUser]);

  const handleInputChange = (event) => {
    setAnswer(event.target.value);
  };

  return (
    <>
      <td><input className="form-control" value={Answer} onChange={handleInputChange}/></td>
      <td><ButtonChangeAnswerValue id={id} lastchange={lastchange} value={Answer} /></td>
    </>

  );
}