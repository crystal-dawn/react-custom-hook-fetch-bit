"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ListItem = _interopRequireDefault(require("../list-item/ListItem"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Results(_ref) {
  var data = _ref.data;
  var filterArg = "Pale Ale";
  return /*#__PURE__*/_react.default.createElement("ol", null, data.filter(function (item) {
    return item.ingredients.malt[0].name !== filterArg;
  }).map(function (item, id) {
    return /*#__PURE__*/_react.default.createElement(_ListItem.default, {
      key: item.id,
      item: item.name
    });
  }));
}

var _default = Results;
exports.default = _default;
Results.propTypes = {
  /** Data fetched from API */
  data: _propTypes.default.object
};

//# sourceMappingURL=Results.js.map