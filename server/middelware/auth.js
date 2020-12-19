module.exports = function (req, res, next) {
  if (!req.session.isAuthenticated) {
    return res.sendStatus(400);
  }
  next();
}