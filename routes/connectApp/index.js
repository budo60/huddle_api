const data = require('express').Router();
const connectApp = require('./connectApp');


data.get('/data/:login/:pass', connectApp);



module.exports = data;