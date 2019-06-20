const routes = require('express').Router();
//const move = require('./saveMove');
//const data = require('./getData');
const connexion = require('./connectApp');
const signup = require('./signup');
const signup_bis = require('./signup_bis');
const event = require('./event');


//routes.use('/saveMove', move);
//routes.use('/getData', data);
routes.use('/connectApp', connexion);
routes.use('/signup', signup);
routes.use('/signup_bis', signup_bis);
routes.use('/event', event);

//routes.use('/getData', data);

app.post('/', function (req, res) {
    res.send('POST request to the homepage');
});

routes.get('/',(req, res) =>{
    res.status(200).json({message : 'connected!'});
})

module.exports = routes;