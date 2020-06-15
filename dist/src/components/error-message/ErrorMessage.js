"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorMessage = function ErrorMessage(_ref) {
  var error = _ref.error;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, console.log(error), /*#__PURE__*/_react.default.createElement("section", null, /*#__PURE__*/_react.default.createElement("h1", null, error), /*#__PURE__*/_react.default.createElement("p", null, "This is likely caused by a problem with the API fetch URL")));
};

var _default = ErrorMessage;
exports.default = _default;
ErrorMessage.propTypes = {
  error: _propTypes.default.string.isRequired
};

//# sourceMappingURL=ErrorMessage.js.map