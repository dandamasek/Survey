import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

function countAnswerValues(question) {
  const answerCounts = {};

  if (question.type.name === 'Uzavřené' || question.type.name === 'Škála') {
    question.values.forEach((value) => {
      answerCounts[value.name] = 0; // Initialize answer count for each value
    });

    question.answers.forEach((answer) => {
      const answerValue = answer.value;

      if (answerValue !== null && typeof answerValue === 'string') {
        const answerValues = answerValue.split(';'); // Split multiple answers by semicolon

        answerValues.forEach((value) => {
          if (value in answerCounts) {
            answerCounts[value] += 1;
          }
        });
      }
    });
  }
  return answerCounts;
}

function ShowValuesTable(props) {
  const { questions } = props;

  useEffect(() => {
    Chart.register(Title, Tooltip);
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        {questions.map((question) => {
          if (question.type.name === 'Uzavřené' || question.type.name === 'Škála') {
            const answerCounts = countAnswerValues(question); // Calculate answer counts for the current question

            const chartData = {
              labels: question.values.map((value) => value.name),
              datasets: [
                {
                  label: 'Count',
                  data: question.values.map((value) => answerCounts[value.name] || 0),
                  backgroundColor: 'rgba(75,192,192,0.6)',
                },
              ],
            };

            return (
              <div key={question.id}>
                <h5 className="card-title">{question.name}</h5>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Value</th>
                      <th>Count</th>
                    </tr>
                  </thead>
                  <tbody>
                    {question.values.map((value) => (
                      <tr key={`${question.id}-${value.id}`}>
                        <td>{value.name}</td>
                        <td>{answerCounts[value.name] || 0}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div key={`chart-${question.id}`}>
                  <Bar data={chartData} />
                </div>
              </div>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
}

export default ShowValuesTable;