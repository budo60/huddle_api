const routes = require('express').Router();
//const move = require('./saveMove');
//const data = require('./getData');
const connexion = require('./connectApp');
const signup = require('./signup');
const signup_bis = require('./signup_bis');


//routes.use('/saveMove', move);
//routes.use('/getData', data);
routes.use('/connectApp', connexion);
routes.use('/signup', signup);
routes.use('/signup_bis', signup_bis);

//routes.use('/getData', data);



routes.get('/',(req, res) =>{
    res.status(200).json({message : 'connected!'});
})

module.exports = routes;