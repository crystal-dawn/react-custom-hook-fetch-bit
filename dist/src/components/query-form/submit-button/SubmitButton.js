"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

 * @fileoverview A React component that renders a submit button.

 * @exports JSX.Element

 */

/**

 * Submit button

 * @name Submit

 * @property {string}   text

 */
var Button = function Button(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/_react.default.createElement("button", {
    type: "submit"
  }, text);
};

var _default = Button;
exports.default = _default;
Button.propTypes = {
  text: _propTypes.default.string.isRequired
};

//# sourceMappingURL=SubmitButton.js.map