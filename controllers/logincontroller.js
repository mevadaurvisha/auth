const signUpModel = require('../models/signUp/signup-model');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const passport = require('../config/passportCon')
const logincontroller =  (req, res) => {  
        res.redirect('/');
    
}

const loginForm = (req, res) => {
    res.render('pages/login');
}

module.exports = {logincontroller,loginForm};