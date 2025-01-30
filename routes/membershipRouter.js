import express from 'express';
import { sendSecret } from '../controllers/secretController.js';
const secretRouter = express();

secretRouter.get('/', (req, res) => {
    res.render('membership', {
        message: { text: '', type: '' },
      });});
secretRouter.post('/', sendSecret);

export default secretRouter;
