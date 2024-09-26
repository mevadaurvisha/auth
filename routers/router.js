const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');
const signUp = require('../controllers/signUpcontroller');
const logIn = require('../controllers/logincontroller');
const passport = require('../config/passportCon');
const logOut = require('../controllers/logOutController')
const authenticate = require('../Authentication/isAuthenticate');

router.get('/', authenticate.isAuthenticate, controller.defaultcontroller);
router.get('/signup', signUp.signUpForm);
router.post('/signupForm', signUp.signUpController);
router.get('/login', logIn.loginForm);
router.post('/loginForm', passport.authenticate('local', { failureRedirect: '/login' }), logIn.logincontroller);
router.get('/logout', logOut.logOutController);

module.exports = router;