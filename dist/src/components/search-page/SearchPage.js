"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ErrorMessage = require("../error-message/ErrorMessage");

var _Loading = require("../loading/Loading");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _QueryForm = _interopRequireDefault(require("../query-form/QueryForm"));

var _Results = _interopRequireDefault(require("../results/Results"));

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

function SearchPage() {
  var _useState = (0, _react.useState)("Lager"),
      _useState2 = _slicedToArray(_useState, 2),
      param = _useState2[0],
      setParam = _useState2[1];

  var searchParam = param.replace(/ /g, "_");
  var url = new URL("https://api.punkapi.com/2/beers?beer_name=".concat(searchParam)).href;

  var _useDataApi = (0, _useDataApi3.useDataApi)(url),
      _useDataApi2 = _slicedToArray(_useDataApi, 2),
      _useDataApi2$ = _useDataApi2[0],
      isLoading = _useDataApi2$.isLoading,
      isError = _useDataApi2$.isError,
      data = _useDataApi2$.data,
      error = _useDataApi2$.error,
      doFetch = _useDataApi2[1];

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_QueryForm.default, {
    url: url,
    param: param,
    setParam: setParam,
    doFetch: doFetch
  }), isError ? /*#__PURE__*/_react.default.createElement(_ErrorMessage.ErrorMessage, {
    error: error
  }) : !isLoading && data !== undefined ? /*#__PURE__*/_react.default.createElement(_Results.default, {
    data: data
  }) : /*#__PURE__*/_react.default.createElement(_Loading.Loading, null));
}

var _default = SearchPage;
exports.default = _default;
SearchPage.propTypes = {
  /** query param for url slug */
  param: _propTypes.default.string,

  /** set state of query param for url slug */
  setParam: _propTypes.default.func,

  /** Parse search param to URL search param

   * #### examples

   * / /g,"_"     - replace all spaces with underscore

   */
  searchParam: _propTypes.default.string,

  /** Object parsed from URL string */
  url: _propTypes.default.object,

  /** Data fetched from API */
  data: _propTypes.default.object,

  /** String of error message for displaying in error message */
  error: _propTypes.default.string,

  /** Boolean that toggles **is loading** element during fetch */
  isLoading: _propTypes.default.bool,

  /** Boolean that toggles **error** element  */
  isError: _propTypes.default.bool,

  /** @listens Function listens for form change to refetch API */
  doFetch: _propTypes.default.func,

  /** Render error message if failed */
  ErrorMessage: _propTypes.default.elementType,

  /** Render input for query */
  QueryTextInput: _propTypes.default.elementType,

  /** Render submit button for query */
  SubmitButton: _propTypes.default.elementType
};

//# sourceMappingURL=SearchPage.js.map