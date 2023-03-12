"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _noteController = require("../controllers/noteController.js");
var _auth = _interopRequireDefault(require("../middlewares/auth.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var noteRouter = _express["default"].Router();
noteRouter.post('/create', _auth["default"], _noteController.create);
noteRouter.put('/update/:id', _auth["default"], _noteController.update);
noteRouter.get('/', _noteController.all);
var _default = noteRouter;
exports["default"] = _default;