const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/login');
  }
};

export function isAdmin(req, res, next) {
  if (req.user && req.user.isadmin) {
    return next();
  }
  res.status(403).json({ message: 'You are not a member yet.' });
}
export default isAuthenticated;
