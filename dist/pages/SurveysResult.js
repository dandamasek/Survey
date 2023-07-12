import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import AnswerShowButton from 'actions/AnswerShowButton';
import { SurveyFetchAsync } from 'async/LoadSurveyDataAsync';
import { useEffect } from 'react';

/**
 * Component for rendering the survey results.
 */
export default function SurveyResult() {
  const surveys = useSelector(state => state.surveys);

  /*
  Create a dispatch function from the useDispatch hook.
  */
  const dispatch = useDispatch();

  /*
  Fetch survey data when the component mounts.
  */
  useEffect(() => {
    dispatch(SurveyFetchAsync());

    /*
    eslint-disable-next-line react-hooks/exhaustive-deps
    */
  }, []);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "p-4 mb-2 bg-warning text-white"
  }, "Surveys results")), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(AnswerShowButton, {
    surveys: surveys
  })));
}