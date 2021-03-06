const router = require('express').Router();
const passport = require('passport');

// Modelos
const User = require('../models/User');

router.get('/users/signup', (req, res) => {
  res.render('users/signup');
});

router.post('/users/signup', async (req, res) => {
  const errors = [];
  const {
    name, email, password, confirm_password: confirmPassword,
  } = req.body;
  if (password !== confirmPassword) {
    errors.push({ text: 'Passwords do not match.' });
  }
  if (password.length < 4) {
    errors.push({ text: 'Passwords must be at least 4 characters.' });
  }
  if (errors.length > 0) {
    res.render('users/signup', {
      errors, name, email, password, confirm_password: confirmPassword,
    });
  } else {
    // mirar los correos que coinciden
    const emailUser = await User.findOne({ email });
    if (emailUser) {
      req.flash('error_msg', 'The Email is already in use.');
      res.redirect('/users/signup');
    } else {
      // guardando un nuevo usuario
      const newUser = new User({ name, email, password });
      newUser.password = await newUser.encryptPassword(password);
      await newUser.save();
      req.flash('success_msg', 'You are registered.');
      res.redirect('/users/signin');
    }
  }
});

router.get('/users/signin', (req, res) => {
  res.render('users/signin');
});

router.post('/users/signin', (req, res, next) => {
  console.log('in here');
  console.log(req.body);
  next();
}, passport.authenticate('local', {
  successRedirect: '/notes',
  failureRedirect: '/users/signin',
  failureFlash: true,
}));

router.get('/users/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out now.');
  res.redirect('/users/signin');
});

module.exports = router;
