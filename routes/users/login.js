const firebase = require('firebase');
const db = require('../../firebaseConfig');
//console.log(db, 'ddbb');


const login = (login,pass) => {
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
    var identifiant = req.body.login,
    pass = req.body.password;

    //console.log(connectApp(login,pass))
    res.send(login(identifiant,pass))
 };