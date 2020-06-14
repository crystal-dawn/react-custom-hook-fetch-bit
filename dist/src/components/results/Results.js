"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ListItem = _interopRequireDefault(require("../list-item/ListItem"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Results(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/_react.default.createElement("ul", null, data.map(function (item, id) {
    return /*#__PURE__*/_react.default.createElement(_ListItem.default, {
      key: item.id,
      item: item.name
    });
  }));
}

var _default = Results;
exports.default = _default;

//# sourceMappingURL=Results.js.map