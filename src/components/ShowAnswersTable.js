import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

/*
Counts the occurrences of answer values in the given questions.
*/
function ShowAnswersTable(props) {
  const countAnswerValues = (questions) => {
    const answerCounts = {};

    questions.forEach((question) => {
      if (question.type.name === 'Uzavřené' || question.type.name === 'Škála') {
        question.answers.forEach((answer) => {
          const answerValue = answer.value;

          if (answerValue in answerCounts) {
            answerCounts[answerValue] += 1;
          } else {
            answerCounts[answerValue] = 1;
          }
        });
      }
    });

    return answerCounts;
  };

  const answerCounts = countAnswerValues(props.questions);

/*
Renders a table to display question answers and their counts.
*/
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
          if (question.type.name === 'Uzavřené' || question.type.name === 'Škála') {
            const uniqueAnswers = Array.from(
              new Set(question.answers.map((answer) => answer.value))
            );

            /*
            Renders a table row for a question with its unique answers and counts
            */
            return (
              <tr key={question.id}>
                <td>{question.name}</td>
                <td>
                  {uniqueAnswers.map((answerValue) => (
                    <div key={`${question.id}-${answerValue}`}>
                      {answerValue}
                    </div>
                  ))}
                </td>
                <td>
                  {uniqueAnswers.map((answerValue) => (
                    <div key={`${question.id}-${answerValue}`}>
                      {answerCounts[answerValue] || 0}
                    </div>
                  ))}
                </td>
              </tr>
            );
          }

          return null;
        })}
      </tbody>
    </table>
  );
}

export default ShowAnswersTable;