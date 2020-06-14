"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

 * A React component that renders the semantic HTML progress indicator.

 * @exports JSX.Element

 */
var Loading = function Loading() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "loadingStatus"
  }, "Loading:"), /*#__PURE__*/_react.default.createElement("progress", {
    id: "loadingStatus"
  }));
};

var _default = Loading;
exports.default = _default;

//# sourceMappingURL=Loading.js.map