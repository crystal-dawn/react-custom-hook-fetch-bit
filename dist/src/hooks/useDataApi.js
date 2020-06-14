"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDataApi = exports.fetchApiDataReducer = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**

 * @function Reducer to fetch API data, trigger loading and error messages

 */
var fetchApiDataReducer = function fetchApiDataReducer(state, action) {
  switch (action.type) {
    case "FETCH_INIT":
      return _objectSpread({}, state, {
        // destructure state to mutate
        isLoading: true,
        isError: false
      });

    case "FETCH_SUCCESS":
      return _objectSpread({}, state, {
        isLoading: false,
        isError: false,
        data: action.payload
      });

    case "FETCH_FAILURE":
      return _objectSpread({}, state, {
        isLoading: false,
        isError: true
      });

    default:
      throw new Error();
  }
};

exports.fetchApiDataReducer = fetchApiDataReducer;
fetchApiDataReducer.propTypes = {
  /** @enum { data, isLoading, isError } */
  state: _propTypes.default.string.isRequired,

  /** An object for the fetched data payload */
  action: _propTypes.default.object.isRequired,

  /** Boolean for triggering is loading component */
  isLoading: _propTypes.default.bool,

  /** Boolean for triggering is error component */
  isError: _propTypes.default.bool,

  /** @return API data object */
  data: _propTypes.default.object.isRequired
};
/**

 * @function Custom fetch hook

 */

var useDataApi = function useDataApi(initialUrl, initialData) {
  initialUrl.replace(/ /g, "_"); // set url state programmatically

  var _useState = (0, _react.useState)(new URL(initialUrl)),
      _useState2 = _slicedToArray(_useState, 2),
      url = _useState2[0],
      setUrl = _useState2[1];

  var _useReducer = (0, _react.useReducer)(fetchApiDataReducer, {
    // loading state indicator
    isLoading: false,
    // error handling state
    isError: false,
    // generic initial state set in hook call
    data: initialData
  }),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1]; // effect hook for data fetching


  (0, _react.useEffect)(function () {
    // abort data fetching
    var didCancel = false;
    fetchData(didCancel, url, dispatch); // use cleanup to not perform state transition for unmounted component

    return function () {
      return didCancel = true;
    }; // track query value to refetch data
  }, [url]); // state object returned from reducer { isLoading, isError, data}

  return [state, setUrl];
};

exports.useDataApi = useDataApi;
useDataApi.propTypes = {
  /** URL for initial API data fetch */
  initialUrl: _propTypes.default.string.isRequired,

  /** Data returned from initial API fetch */
  initialData: _propTypes.default.object.isRequired,

  /** URL based on query input */
  url: _propTypes.default.string.isRequired,

  /** Function to update URL state based on query input */
  setUrl: _propTypes.default.func.isRequired,

  /** String for URL query slug */
  state: _propTypes.default.string.isRequired,

  /** Object for fetched data */
  dispatch: _propTypes.default.object.isRequired,

  /** Boolean for triggering is loading component */
  isLoading: _propTypes.default.bool,

  /** Boolean for triggering is error component */
  isError: _propTypes.default.bool,

  /** @return API data object */
  data: _propTypes.default.object.isRequired,

  /** Boolean to not perform state transition for unmounted component

   * ### example<hr>

   * ```return () => (didCancel = true);```

   */
  didCancel: _propTypes.default.bool
};
/**

 * Function to fetch data

 * @async

 */

var fetchData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(didCancel, url, dispatch) {
    var result, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dispatch({
              type: "FETCH_INIT"
            }); // wrap in try/catch block for error handling

            _context.prev = 1;
            _context.next = 4;
            return fetch(url);

          case 4:
            result = _context.sent;
            _context.next = 7;
            return result.json();

          case 7:
            data = _context.sent;

            // abort data fetching
            if (!didCancel) {
              dispatch({
                type: "FETCH_SUCCESS",
                payload: data
              });
            }

            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](1);

            // abort data fetching
            if (!didCancel) {
              dispatch({
                type: "FETCH_FAILURE"
              });
            }

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 11]]);
  }));

  return function fetchData(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

fetchData.propTypes = {
  /** Function to set switch case */
  dispatch: _propTypes.default.func.isRequired,

  /** String of switch case value */
  type: _propTypes.default.string.isRequired,

  /** Target API response */
  result: _propTypes.default.func.isRequired,

  /** Access the Fetch API */
  fetch: _propTypes.default.func.isRequired,

  /** URL based on query input */
  url: _propTypes.default.string.isRequired,

  /** @return API data object */
  data: _propTypes.default.object.isRequired,

  /** Returns a promise that resolves with the result of parsing the body text as JSON. */
  json: _propTypes.default.func.isRequired,

  /** Boolean to not perform state transition for unmounted component */
  didCancel: _propTypes.default.bool,

  /** Send data to update state of application data */
  payload: _propTypes.default.object
};

//# sourceMappingURL=useDataApi.js.map