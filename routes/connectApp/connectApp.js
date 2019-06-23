const firebase = require('firebase');
const db = require('../../firebaseConfig');
//console.log(db, 'ddbb');


const connectApp = (login,pass) => {
    //console.log("bla");
    //let result="pouet";
    db
    .auth()
    .signInWithEmailAndPassword(login, pass)
    .catch( error => console.log(error.message))
    //console.log(db.auth().currentUser)
    return db.auth().currentUser
}

module.exports = (req, res) => {
    var login = req.body.login,
    pass = req.body.pass;

    //console.log(connectApp(login,pass))
    res.send(connectApp(login,pass))
 };