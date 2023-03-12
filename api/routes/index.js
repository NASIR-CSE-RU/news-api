import express from 'express';
import userRouter from "./userRoutes.js";
import noteRouter from "./noteRoutes.js";

const routers = express.Router();

routers.use('/users',userRouter);
routers.use('/notes',noteRouter);

export default routers;




