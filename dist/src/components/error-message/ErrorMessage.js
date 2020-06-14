"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorMessage = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorMessage = function ErrorMessage(_ref) {
  var error = _ref.error;
  return /*#__PURE__*/_react.default.createElement("section", null, /*#__PURE__*/_react.default.createElement("h1", null, error), /*#__PURE__*/_react.default.createElement("p", null, "This is likely caused by the API url in the fetch request."));
};

exports.ErrorMessage = ErrorMessage;
ErrorMessage.propTypes = {
  /** Error message */
  error: _propTypes.default.string.isRequired
};

//# sourceMappingURL=ErrorMessage.js.map