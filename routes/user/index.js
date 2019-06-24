const data = require('express').Router();
const login = require('./login');
const signin = require('./signup');
const signin_bis = require('./signup_bis');


data.post('/login', login);
data.post('/signin', signin);
data.post('/signin_bis', signin_bis);

module.exports = data;