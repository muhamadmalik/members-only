import express from 'express';
import db from '../db/db.js';
import bcrypt from 'bcrypt';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

const loginRouter = express();
export const increaseLogins = async (user) => {
  try {
    const count = await db(`SELECT * FROM counter WHERE user_id = $1`, [
      user.id,
    ]);
    const loginCount = count.rows[0].logins;
    const newLoginsCount = loginCount + 1;
    const cont = await db(
      `UPDATE counter SET logins = $1  WHERE user_id = $2`,
      [newLoginsCount, user.id]
    );
  } catch (error) {
    console.error(error);
  }
};
passport.use(
  new LocalStrategy(
    { usernameField: 'email' },
    async (email, password, done) => {
      try {
        const values = [email];
        const result = await db(`SELECT * FROM users WHERE email = $1`, values);
        const users = result.rows;
        console.log(users);
        const user = users[0];
        if (!users) {
          return done(null, false, {
            message: 'Entered Email was Incorrect, Please try again.',
          });
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
          return done(null, false, {
            message: 'The password is Incorrect, Please try again.',
          });
        }
        console.log('authentication successfull.');
        return done(null, user);
      } catch (error) {
        console.error('Error during authentication:', error);
        return done(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  // console.log('Serializing user:', user.id);
  done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
  try {
    const loginValues = [id, 0, 0];
    const values = [id];
    const result = await db(
      `SELECT users.id , email, counter.logins AS user_logins, counter.visits AS user_visits, users.isAdmin AS isAdmin FROM users JOIN counter ON users.id = counter.user_id WHERE users.id = $1`,
      values
    );
    const users = result.rows;

    const user = users[0];
    console.log(user);
    done(null, user);
  } catch (error) {
    return done(error);
  }
});

loginRouter.get('/', (req, res) => {
  res.render('login', { passwordError: '' });
});

loginRouter.post('/', (req, res, next) => {
  passport.authenticate('local', async (err, user, info) => {
    if (err) {
      console.log('what about this here. ? ');
      return next(err);
    }
    if (!user) {
      console.log('this is the for the user not being here. ');
      return res.render('login', {
        passwordError: 'Wrong Password! Try Again.',
      }); 
    }
    req.logIn(user, async (err) => {
      if (err) {
        return next(err);
      }

      await increaseLogins(user);
      return res.redirect('/');
    });
  })(req, res, next);
}); 

export default loginRouter;
