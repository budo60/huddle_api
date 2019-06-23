const data = require('express').Router();
const connectApp = require('./connectApp');


data.post('/data', connectApp);



module.exports = data;