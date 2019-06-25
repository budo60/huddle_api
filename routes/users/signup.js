const firebase = require('firebase');
const db = require('../../firebaseConfig');
//console.log(db, 'ddbb');


const signup = (mail,pass,username) => {
    db
        .auth()
        .createUserWithEmailAndPassword(mail, pass)
        .then(() => {
            const userId = db.auth().currentUser.uid;
            db.database().ref('user/' + userId).set({
            username: username,
            address:null,
            date: null,
            list_part:null,
            list_owner:null

            });
        })
        .catch(error => console.log(error.message))
}

module.exports = (req, res) => {
    var mail = req.body.mail,
    pass = req.body.pass,
    username = req.body.username;

    //console.log(connectApp(login,pass))
    res.send(signup(mail,pass,username))
 };