import express from "express";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors'
import routers from './api/routes/index.js'

dotenv.config();
const app = express();
app.use(cors());
const PORT = process.env.PORT;
app.use(bodyParser.json());
app.use('/api/v1',routers)
app.get('/',(req,res)=>{
res.send('hellow from home page');
});

mongoose.connect(process.env.DB_CONNECTION)
.then(()=>{
    app.listen(PORT,()=>console.log(`Server is running on port: http://localhost:${PORT}`));
})
.catch((error)=>{
    console.log(error)
})
