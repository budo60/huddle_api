const routes = require('express').Router();
//const move = require('./saveMove');
//const data = require('./getData');
const user = require('./users');
const event = require('./events');


routes.use('/users', user);
routes.use('/events', event);


routes.post('/', function (req, res) {
    res.send('POST request to the homepage');
})

routes.get('/',(req, res) =>{
    res.status(200).json({message : 'connected!'});
})

module.exports = routes;