"use strict";

var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// import mongoose from 'mongoose';
// import routers from './api/routes/index.js'

_dotenv["default"].config();
var app = (0, _express["default"])();
// const PORT = process.env.PORT;
var PORT = 8080;
app.use(_bodyParser["default"].json());
// app.use('/api/v1',routers)
app.get('/', function (req, res) {
  res.send('hellow from home page');
});
app.listen(PORT, function () {
  return console.log("Server is running on port: http://localhost:".concat(PORT));
});
// mongoose.connect(process.env.DB_CONNECTION)
// .then(()=>{
//     app.listen(PORT,()=>console.log(`Server is running on port: http://localhost:${PORT}`));
// })
// .catch((error)=>{
//     console.log(error)
// })