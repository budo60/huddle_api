const firebase = require('firebase');
const db = require('../../firebaseConfig');
//console.log(db, 'ddbb');


const log = (login,pass) => {
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
    pass = req.body.password;

    //console.log(connectApp(login,pass))
    res.send(log(login,pass))
 };