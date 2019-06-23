const data = require('express').Router();
const signup = require('./signup');


data.post('/', signup);



module.exports = data;