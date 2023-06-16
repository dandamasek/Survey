import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

/*
Counts the occurrences of answer values in the given question.
*/
function countAnswerValues(question) {
  const answerCounts = {};

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

  return answerCounts;
}

/*
Renders a table to display question answers and their counts.
*/
function ShowAnswersTable(props) {
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
            const answerCounts = countAnswerValues(question); // Calculate answer counts for the current question

            // Render a table row for each unique answer
            return uniqueAnswers.map((answerValue, index) => (
              <tr key={`${question.id}-${answerValue}`}>
                {/* Only render the question name for the first unique answer */}
                {index === 0 && (
                  <td rowSpan={uniqueAnswers.length}>{question.name}</td>
                )}
                <td>{answerValue}</td>
                <td>{answerCounts[answerValue] || 0}</td>
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