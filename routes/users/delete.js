const firebase = require('firebase');
const db = require('../../firebaseConfig');
//console.log(db, 'ddbb');


const delete_user = (idU) => {
    db.auth()
    var adaRef = db.database().ref.ref('user/' + idU);
    adaRef.remove()
    .then(function() {
        console.log("Remove succeeded.")
    })
    .catch(function(error) {
        console.log("Remove failed: " + error.message)
    });

}

module.exports = (req, res) => {
    var idU = req.params.idU
    

    //console.log(connectApp(login,pass))
    res.send(delete_user(idU))
 };