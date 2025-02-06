import db from '../db/db.js';
import bcrypt from 'bcrypt';

export const renderSignUp = (req, res) => {
  res.render('sign-up-form', { emailError: '', user: req.user });
};

export const signUp = async (req, res) => {
  try {
    const password = req.body.password;
    const hashedPassword = await bcrypt.hash(password, 10);
    const { firstname, lastname, email } = req.body;
    const emailFinders = req.body.email;
    const values = [firstname, lastname, email, hashedPassword];
    const result = await db(
      `INSERT INTO users  (firstname, lastname, email, password) VALUES(
                $1, $2, $3, $4
                ) `,
      values
    );
    const emailFinder = await db(`SELECT * FROM users WHERE email = $1`, [
      emailFinders,
    ]);
    const users = emailFinder.rows;
    const valuess = [0, 0, users[0].id];
    if (users.length !== 0) {
      const createCounter = await db(
        `INSERT INTO counter (visits, logins, user_id) VALUES ($1, $2, $3)`,
        valuess
      );
    } else {
      res.redirect('/login');
    }
    res.redirect('/login');
  } catch (error) {
    console.error('Error signing up the user.', error);
  }
};
