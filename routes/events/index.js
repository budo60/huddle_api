const data = require('express').Router();
const event = require('./event_add');
const event_d = require('./event_d');
const event_e = require('./event_e');
//onst event_get = require('./event_get');


data.post('/add', event);
data.delete(':event_id/delete', event_d);
data.put(':event_id/save/', event_e);
//data.get('/get', event_get);



module.exports = data;