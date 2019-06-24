const routes = require('express').Router();
//const move = require('./saveMove');
//const data = require('./getData');
const user = require('./user');
const event = require('./event');
const profil = require('./profil');


//routes.use('/saveMove', move);
//routes.use('/getData', data);

routes.use('/user', user);
routes.use('/event', event);
routes.use('/profil', profil);

//routes.use('/getData', data);

routes.post('/', function (req, res) {
    res.send('POST request to the homepage');
})

routes.get('/',(req, res) =>{
    res.status(200).json({message : 'connected!'});
})

module.exports = routes;