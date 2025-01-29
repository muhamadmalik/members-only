import db from '../db/db.js';
import bcrypt from 'bcrypt';

export const renderSignUp = (req, res) => {
  res.render('sign-up-form');
};

export const signUp = async (req, res) => {
  try {
    const password = req.body.password;
    const hashedPassword = await bcrypt.hash(password, 10);
    const { firstname, lastname, email } = req.body;
    const values = [firstname, lastname, email, hashedPassword];
    const result = await db(
      `INSERT INTO users  (firstname, lastname, email, password) VALUES(
                $1, $2, $3, $4
                ) `,
      values
    );
    res.send('form submitted correctly.');
  } catch (error) {
    console.error('Error signing up the user.', error);
  }
};
