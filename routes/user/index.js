const data = require('express').Router();
const login = require('./login');
const signin = require('./signup');
const signin_bis = require('./signup_bis');
const deluser = require('./delete')


data.post('/login', login);
data.post('/add', signin);
data.post('/add_', signin_bis);
data.delete('/delete/:idU', deluser);

module.exports = data;