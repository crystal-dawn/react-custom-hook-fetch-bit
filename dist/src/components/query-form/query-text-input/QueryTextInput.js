"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

 * A React component that renders a text input with a default value.

 * @interface

 * @exports JSX.Element

 */

/**

 * @name QueryTextInput

 * @augments `QueryForm`

 * @description Renders a text input element.

 * @returns {JSX.Element} A text input with query value. 

 */
var QueryTextInput = function QueryTextInput(_ref) {
  var value = _ref.value,
      setValue = _ref.setValue;
  return /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    value: value,
    onChange: function onChange(event) {
      return setValue(event.target.value);
    }
  });
};

var _default = QueryTextInput;
exports.default = _default;
QueryTextInput.propTypes = {
  /** Placeholder text for the input element. */
  value: _propTypes.default.string.isRequired,

  /** A function to collect the query text. */
  setValue: _propTypes.default.func.isRequired,

  /** A function to update state.

   * #### Example <hr>

   * ```onChange={(event) => setValue(event.target.value)}```

   */
  onChange: _propTypes.default.func
};

//# sourceMappingURL=QueryTextInput.js.map