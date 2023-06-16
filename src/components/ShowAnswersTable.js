import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

/*
Counts the occurrences of answer values in the given question.
*/
function countAnswerValues(question) {
  const answerCounts = {};

  if (question.type.name === 'Uzavřené' || question.type.name === 'Škála') {
    question.values.forEach((value) => {
      answerCounts[value.name] = 0; // Initialize answer count for each value
      console.log(value.name)
    });

    question.answers.forEach((answer) => {
      const answerValue = answer.value;

      if (answerValue in answerCounts) {
        answerCounts[answerValue] += 1;
      }
    });
  }

  return answerCounts;
}


/*
Renders a table to display question values and their counts.
*/
function ShowValuesTable(props) {
  const { questions } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Question</th>
          <th>Value</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        {questions.map((question) => {
          if (question.type.name === 'Uzavřené' || question.type.name === 'Škála') {
            const answerCounts = countAnswerValues(question); // Calculate answer counts for the current question

            return (
              <React.Fragment key={question.id}>
                {question.values.map((value) => (
                  <tr key={`${question.id}-${value.id}`}>
                    <td>{question.name}</td>
                    <td>{value.name}</td>
                    <td>{answerCounts[value.name] || 0}</td>
                  </tr>
                ))}
              </React.Fragment>
            );
          }

          return null;
        })}
      </tbody>
    </table>
  );
}

export default ShowValuesTable;