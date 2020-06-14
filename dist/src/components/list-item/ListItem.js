"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

 * A React component that renders the results as list items.

 * @exports JSX.Element

 */
var ListItem = function ListItem(_ref) {
  var item = _ref.item;
  return /*#__PURE__*/_react.default.createElement("li", null, item);
};

var _default = ListItem;
exports.default = _default;
ListItem.propTypes = {
  /** String from data property to be displayed as list */
  item: _propTypes.default.string.isRequired
};

//# sourceMappingURL=ListItem.js.map