"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = QueryForm;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _QueryTextInput = _interopRequireDefault(require("./query-text-input/QueryTextInput"));

var _SubmitButton = _interopRequireDefault(require("./submit-button/SubmitButton"));

var _useDataApi3 = require("../../hooks/useDataApi");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**

 * @function Renders input for querying data

 * @name QueryForm

 */
function QueryForm() {
  var _useState = (0, _react.useState)("great beer"),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var searchParam = value.replace(/ /g, "_");
  var url = new URL("https://api.punkapi.com/v2/beers?beer_name=".concat(searchParam));

  var _useDataApi = (0, _useDataApi3.useDataApi)(url.href, {
    hits: []
  }),
      _useDataApi2 = _slicedToArray(_useDataApi, 2),
      _useDataApi2$ = _useDataApi2[0],
      data = _useDataApi2$.data,
      isLoading = _useDataApi2$.isLoading,
      isError = _useDataApi2$.isError,
      doFetch = _useDataApi2[1];

  return /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: function onSubmit(e) {
      /** execute new data fetch */
      doFetch(url.href);
      /** prevent browser from refreshing on submit */

      e.preventDefault();
    }
  }, /*#__PURE__*/_react.default.createElement(_QueryTextInput.default, {
    value: value,
    setValue: setValue
  }), /*#__PURE__*/_react.default.createElement(_SubmitButton.default, {
    text: "Search"
  }));
}

QueryForm.propTypes = {
  /** query value for url slug */
  value: _propTypes.default.string,

  /** set state of query value for url slug */
  setValue: _propTypes.default.func,

  /** Parse search value to URL search param

   * #### examples

   * / /g,"_"     - replace all spaces with underscore

   */
  searchParam: _propTypes.default.string.isRequired,

  /** Object parsed from URL string */
  url: _propTypes.default.object.isRequired,

  /** @listens Function listens for form change to refetch API */
  doFetch: _propTypes.default.func.isRequired,

  /** Render input for query */
  QueryTextInput: _propTypes.default.elementType,

  /** Render submit button for query */
  SubmitButton: _propTypes.default.elementType
};

//# sourceMappingURL=QueryForm.js.map