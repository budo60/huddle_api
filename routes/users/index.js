const data = require('express').Router();
const login = require('./login');
const signin = require('./signup');
const signin_bis = require('./signup_bis');
const deluser = require('./delete');
const save_user = require('./profil_save');


data.post('/login', login);
data.post('/add', signin);
data.post('/add_', signin_bis);
data.delete('/delete/:idU', deluser);
data.put('/save/:idU', save_user);

module.exports = data;