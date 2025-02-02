import express from 'express';

const logoutRouter = express();
logoutRouter.get('/', (req, res, next) => {
  req.logout((error) => {
    if (error) {
      return next(error);
    }
    res.redirect('/login');
  });
});

export default logoutRouter 