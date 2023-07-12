import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * Component used to render a table displaying user information.
 * @param {object} props - The component props containing the currentUser object.
 * @returns {JSX.Element} - The rendered component.
 */
function UserTable(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("table", {
    className: "table"
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "ID"), /*#__PURE__*/React.createElement("td", null, props.currentUser.id)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Email"), /*#__PURE__*/React.createElement("td", null, props.currentUser.email))))));
}
export default UserTable;