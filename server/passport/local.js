const LocalStrategy = require('passport-local').Strategy;
const User          = require('../models/User');
const bcrypt        = require('bcrypt');

module.exports = function (passport) {
  passport.serializeUser((loggedInUser, cb) => {
    cb(null, loggedInUser._id);
  });

  passport.deserializeUser((userIdFromSession, cb) => {
    User.findById(userIdFromSession, (err, userDocument) => {
      if (err) {
        cb(err);
        return;
      }

      cb(null, userDocument);
    });
  });
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },(email, password, next) => {
    User.findOne({ email }, (err, foundUser) => {
      if (err) {
        next("papu");
        return;
      }

      if (!foundUser) {
        next(null, false, { message: 'Incorrect email' });
        return;
      }

      if (!bcrypt.compareSync(password, foundUser.password)) {
        next(null, false, { message: 'Incorrect password' });
        return;
      }
      next(null, foundUser);
    });
  }));


};
