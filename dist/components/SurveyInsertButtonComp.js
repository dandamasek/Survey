import React from 'react';
import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { SurveySaveButton } from './SurveySaveButton'; // Import the SurveySaveButton component

/**
 * Component for a button that inserts a new survey.
 * @returns {JSX.Element} - The rendered component.
 * @function 
 */

export const SurveyInsertButton = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState(" ");
  const [type, setType] = useState("712029b6-2dbc-4952-9d3e-e897899edf0a");
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleNameChange = event => {
    setName(event.target.value);
  };
  const handleTypeChange = event => {
    setType(event.target.value);
  };
  const handleSave = () => {
    setShowModal(false);
    dispatch(FetchData({
      name,
      type
    }));
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-success btn-lg m-2",
    onClick: () => setShowModal(true)
  }, "New survey"), /*#__PURE__*/React.createElement(Modal, {
    show: showModal,
    onHide: handleCloseModal
  }, /*#__PURE__*/React.createElement(Modal.Header, {
    closeButton: true
  }, /*#__PURE__*/React.createElement(Modal.Title, null, "Creating new survey")), /*#__PURE__*/React.createElement(Modal.Body, null, /*#__PURE__*/React.createElement(Form.Group, null, /*#__PURE__*/React.createElement(Form.Label, null, "Survey Name:"), /*#__PURE__*/React.createElement(Form.Control, {
    type: "text",
    value: name,
    onChange: handleNameChange
  })), /*#__PURE__*/React.createElement(Form.Group, null, /*#__PURE__*/React.createElement(Form.Label, null, "Type:"), /*#__PURE__*/React.createElement(Form.Control, {
    as: "select",
    value: type,
    onChange: handleTypeChange
  }, /*#__PURE__*/React.createElement("option", {
    value: "712029b6-2dbc-4952-9d3e-e897899edf0a"
  }, "Hodnocen\xED v\xFDuky")))), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: handleCloseModal
  }, "Close"), /*#__PURE__*/React.createElement(SurveySaveButton, {
    name: name,
    type: type,
    onSave: handleSave
  }))));
};