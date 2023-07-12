import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { SurveyFetchAsync } from 'async/LoadSurveyDataAsync';
import { useEffect, useState } from 'react';
import QuestionAnswerTable from '../components/QuestionAnswerTable';
// import { UserTable } from 'components/UserTable';

/**
 * Component for rendering the survey answer page.
 */
export default function SurveyAnswer() {
  const surveys = useSelector(state => state.surveys);
  const currentUser = {
    id: "2d9dc5ca-a4a2-11ed-b9df-0242ac120003"
  };
  const dispatch = useDispatch();

  /**
   * Fetch survey data when the component mounts.
   */
  useEffect(() => {
    dispatch(SurveyFetchAsync());
  }, [dispatch]);
  const [id, setId] = useState(currentUser.id);

  /**
   * Event handler for ID change.
   * @param {Object} event - The event object.
   */
  const handleIdChange = event => {
    setId(event.target.value);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "p-4 mb-2 bg-info text-white"
  }, "Survey answer")), /*#__PURE__*/React.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/React.createElement("h1", null, "User ID"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: id,
    onChange: handleIdChange
  }), surveys.map(survey => {
    const found = survey.questions.some(question => {
      return question.answers.some(answer => {
        return answer.user.id === id;
      });
    });
    if (found) {
      return /*#__PURE__*/React.createElement("div", {
        className: "card m-5 border-secondary",
        key: survey.id + "Survey answer table"
      }, /*#__PURE__*/React.createElement("div", {
        className: "card-header bg-info text-white"
      }, /*#__PURE__*/React.createElement("h1", null, survey.name)), /*#__PURE__*/React.createElement(QuestionAnswerTable, {
        questions: survey.questions,
        currentUser: {
          id: id
        }
      }));
    }
    return null;
  })));
}