const data = require('express').Router();
const signup = require('./signup');


data.get('/:mail/:pass/:username', signup);



module.exports = data;