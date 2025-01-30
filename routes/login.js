import express from 'express';
import db from '../db/db.js';
import bcrypt from 'bcrypt';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

const loginRouter = express();

passport.use(
  new LocalStrategy(
    { usernameField: 'email' },
    async (email, password, done) => {
      try {
        const values = [email];
        const result = await db(`SELECT * FROM users WHERE email = $1`, values);
        const users = result.rows;
        const user = users[0];
        // console.log('this is being executed.');
        // console.log(user);
        const match = await bcrypt.compare(password, user.password);
        if (!users) {
          return done(null, false, {
            message: 'Entered Email was Incorrect, Please try again.',
          });
        }
        if (!match) {
          return done(null, false, {
            message: 'The password is Incorrect, Please try again.',
          });
        }
        // console.log('authentication successfull.');
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
    const values = [id];
    const result = await db(`SELECT * FROM users WHERE id = $1`, values);
    const users = result.rows;
    const user = users[0];
    // console.log('Deserialized user:', user);
    done(null, user);
  } catch (error) {
    // console.error('Error during deserialization:', error);
    return done(error);
  }
});

loginRouter.get('/', (req, res) => {
  res.render('login');
});

loginRouter.post(
  '/',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
  })
);

export default loginRouter;
