import express from 'express';
import { renderSignUp, signUp } from '../controllers/signupController.js';
import { validationResult, body } from 'express-validator';
import db from '../db/db.js';

const signupRouter = express();

signupRouter.get('/', renderSignUp);
signupRouter.post(
  '/',
  body('email').custom(async (value) => {
    const values = [value];
    const result = await db(`SELECT * FROM users WHERE email = $1`, values);
    const users = result.rows;
    const user = users[0];
    console.log(user);
    if (user) {

      throw new Error('Email is already in use. Please use another.');
    }
  }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next()
  },
  signUp
);

export default signupRouter;
