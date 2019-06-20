const data = require('express').Router();
const event = require('./event_add');


data.post('/add', event);



module.exports = data;