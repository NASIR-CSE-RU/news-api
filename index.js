import express from "express";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
// import mongoose from 'mongoose';
// import routers from './api/routes/index.js'

dotenv.config();
const app = express();
// const PORT = process.env.PORT;
 const PORT =8080;

app.use(bodyParser.json());
// app.use('/api/v1',routers)
app.get('/',(req,res)=>{
res.send('hellow from home page');
});
app.listen(PORT,()=>console.log(`Server is running on port: http://localhost:${PORT}`));
// mongoose.connect(process.env.DB_CONNECTION)
// .then(()=>{
//     app.listen(PORT,()=>console.log(`Server is running on port: http://localhost:${PORT}`));
// })
// .catch((error)=>{
//     console.log(error)
// })
