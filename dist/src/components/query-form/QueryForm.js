"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = QueryForm;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _QueryTextInput = _interopRequireDefault(require("./query-text-input/QueryTextInput"));

var _react = _interopRequireDefault(require("react"));

var _SubmitButton = _interopRequireDefault(require("./submit-button/SubmitButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

 * @fileoverview A React component that renders a input form for querying fetch data.

 * @exports JSX.Element

 */

/**

 * @function Renders input for querying data

 * @name QueryForm

 */
function QueryForm(_ref) {
  var url = _ref.url,
      param = _ref.param,
      setParam = _ref.setParam,
      doFetch = _ref.doFetch;
  return /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: function onSubmit(e) {
      /** execute new data fetch */
      doFetch(url);
      /** prevent browser from refreshing on submit */

      e.preventDefault();
    }
  }, /*#__PURE__*/_react.default.createElement(_QueryTextInput.default, {
    value: param,
    setValue: setParam
  }), /*#__PURE__*/_react.default.createElement(_SubmitButton.default, {
    text: "Search"
  }));
}

QueryForm.propTypes = {
  /** Object parsed from URL string */
  url: _propTypes.default.string.isRequired,

  /** Current search parameter */
  param: _propTypes.default.string,

  /** A function to set param state */
  setParam: _propTypes.default.func,

  /** @listens Function listens for form change to refetch API */
  doFetch: _propTypes.default.func.isRequired,

  /** Used to pass param state to input element */
  value: _propTypes.default.string,

  /** A function to collect the input text for value state. */
  setValue: _propTypes.default.func,

  /** Parse search value to URL search param

   * #### examples

   * / /g,"_"     - replace all spaces with underscore

   */
  searchParam: _propTypes.default.string,

  /** Render input for query */
  QueryTextInput: _propTypes.default.elementType,

  /** Render submit button for query */
  SubmitButton: _propTypes.default.elementType
};

//# sourceMappingURL=QueryForm.js.map