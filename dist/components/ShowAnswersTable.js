import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip } from 'chart.js';
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

/**
 * Counts the answer values for a given question.
 * @param {object} question - The question object.
 * @returns {object} - An object containing the counts of each answer value.
 */
function countAnswerValues(question) {
  const answerCounts = {};
  if (question.type.name === 'Uzavřené' || question.type.name === 'Škála') {
    question.values.forEach(value => {
      answerCounts[value.name] = 0; // Initialize answer count for each value
    });

    question.answers.forEach(answer => {
      const answerValue = answer.value;
      if (answerValue !== null && typeof answerValue === 'string' && answer.aswered === true) {
        const answerValues = answerValue.split(';'); // Split multiple answers by semicolon

        answerValues.forEach(value => {
          if (value in answerCounts) {
            answerCounts[value] += 1;
          }
        });
      }
    });
  }
  return answerCounts;
}

/**
 * Component used to display a table of question values and corresponding charts.
 * @param {object} props - The component props containing the questions.
 * @returns {JSX.Element} - The rendered component.
 */
function ShowValuesTable(props) {
  const {
    questions
  } = props;
  useEffect(() => {
    Chart.register(Title, Tooltip);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, questions.map(question => {
    if (question.type.name === 'Uzavřené' || question.type.name === 'Škála') {
      const answerCounts = countAnswerValues(question); // Calculate answer counts for the current question

      const chartData = {
        labels: question.values.map(value => value.name),
        datasets: [{
          label: 'Count',
          data: question.values.map(value => answerCounts[value.name] || 0),
          backgroundColor: 'rgba(75,192,192,0.6)'
        }]
      };
      return /*#__PURE__*/React.createElement("div", {
        key: question.id
      }, /*#__PURE__*/React.createElement("div", {
        className: "card"
      }, /*#__PURE__*/React.createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/React.createElement("h5", {
        className: "card-title"
      }, question.name), /*#__PURE__*/React.createElement("div", {
        className: "card-text"
      }, question.values.map(value => /*#__PURE__*/React.createElement("div", {
        key: `${question.id}-${value.id}`
      }, /*#__PURE__*/React.createElement("p", null, value.name, ": ", answerCounts[value.name] || 0)))))), /*#__PURE__*/React.createElement("div", {
        key: `chart-${question.id}`,
        className: "col-md-6 mx-auto text-center"
      }, /*#__PURE__*/React.createElement(Bar, {
        data: chartData,
        options: {
          scales: {
            y: {
              beginAtZero: true,
              max: 20 // Set the maximum value of the y-axis scale
            }
          }
        }
      })));
    } else if (question.type.name === 'Otevřené') {
      return /*#__PURE__*/React.createElement("div", {
        key: question.id
      }, /*#__PURE__*/React.createElement("div", {
        className: "card"
      }, /*#__PURE__*/React.createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/React.createElement("h5", {
        className: "card-title"
      }, question.name), /*#__PURE__*/React.createElement("div", {
        className: "card-text"
      }, question.answers.map(answer => {
        if (answer.aswered === true) {
          return /*#__PURE__*/React.createElement("div", {
            key: `${question.id}-${answer.id}`
          }, /*#__PURE__*/React.createElement("p", null, answer.value));
        } else {
          return null;
        }
      })))));
    }
    return null;
  })));
}
export default ShowValuesTable;