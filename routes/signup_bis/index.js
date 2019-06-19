const data = require('express').Router();
const signup_bis = require('./signup_bis');


data.get('/:id/:address/:date', signup_bis);



module.exports = data;