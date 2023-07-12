import React from 'react';
import { useDispatch } from 'react-redux';
import { AnswerUpdateAsweredGroupFetch } from '../async/AnswerUpdateAsweredGroupFetch';

/**
 * Component for a button to close a group's answered survey.
 * @param {object} props - The component props containing the necessary details.
 * @returns {JSX.Element} - The rendered component.
 * @function 
 */

export const AnswerUpdateAsweredGroupButton = props => {
  const dispatch = useDispatch();
  return /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: () => dispatch(AnswerUpdateAsweredGroupFetch(props))
  }, "Close survey");
};