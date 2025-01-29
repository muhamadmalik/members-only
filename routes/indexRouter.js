import express from 'express';
import { renderIndex } from '../controllers/indexController.js';
const indexRouter = express();

indexRouter.get('/', renderIndex);

export default indexRouter;
