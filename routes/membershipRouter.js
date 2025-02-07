import express from 'express';
import { sendSecret } from '../controllers/secretController.js';
import isAuthenticated from '../auth/authMiddleware.js';

const secretRouter = express();

secretRouter.get('/', isAuthenticated, (req, res) => {
  res.render('membership', {
    message: { text: '', type: '' },
    user: req.user,
  });
});
secretRouter.post('/', isAuthenticated, sendSecret);

export default secretRouter;
