import express from 'express';
import {create,update,all} from '../controllers/noteController.js';
import auth from '../middlewares/auth.js'

const noteRouter = express.Router();

noteRouter.post('/create',auth,create);
noteRouter.put('/update/:id',auth,update);

noteRouter.get('/',all);

export default noteRouter;