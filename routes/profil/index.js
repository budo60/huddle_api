const data = require('express').Router();
const profil_save = require('./profil_save');


data.post('/save', profil_save);



module.exports = data;