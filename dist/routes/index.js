"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _userRoutes = _interopRequireDefault(require("./userRoutes.js"));
var _noteRoutes = _interopRequireDefault(require("./noteRoutes.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var routers = _express["default"].Router();
routers.use('/users', _userRoutes["default"]);
routers.use('/notes', _noteRoutes["default"]);
var _default = routers;
exports["default"] = _default;