import express, { urlencoded } from 'express';
import indexRouter from './routes/indexRouter.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import signupRouter from './routes/signup.js';
import loginRouter from './routes/login.js';
import logoutRouter from './routes/logout.js';
import session from 'express-session';
import passport from 'passport';
import 'dotenv/config';
import messageRouter from './routes/messageRouter.js';
import secretRouter from './routes/membershipRouter.js';
const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);
const app = express();

const isAuthenticated = () => {

}
app.set('views', join(__dirname, 'views'));
app.use(express.static(join(__dirname, 'public')));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/message', messageRouter);
app.use('/membership', secretRouter);
app.listen(3000, () => {
  console.log('we are listening at 3000.');
});
