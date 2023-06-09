import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ShowAnswersTable(props) {
  const countAnswerValues = (question) => {
    const answerCounts = {};

    question.answers.forEach((answer) => {
      const answerValue = answer.value;

      if (answerValue in answerCounts) {
        answerCounts[answerValue] += 1;
      } else {
        answerCounts[answerValue] = 1;
      }
    });

    return answerCounts;
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Question</th>
          <th>Answer</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        {props.questions.map((question) => {
          if (question.type.name === "Uzavřené" || question.type.name === 'Škála') {
            const answerCounts = countAnswerValues(question);

            return Object.entries(answerCounts).map(([answerValue, count]) => (
              <tr key={`${question.id}-${answerValue}`}>
                <td>{question.name}</td>
                <td>{answerValue}</td>
                <td>{count}</td>
              </tr>
            ));
          }

          return null;
        })}
      </tbody>
    </table>
  );
}

export default ShowAnswersTable;