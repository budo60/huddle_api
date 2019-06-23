const firebase = require('firebase');
const db = require('../../firebaseConfig');
//console.log(db, 'ddbb');


const profil_save = (id,address,phonenumber) => {
    db.auth()
    db.database().ref('user/' + id).update({
        address: address,
        phonenumber: phonenumber
    }).then(function() {
        console.log("Update succeeded.")
    })
    .catch(function(error) {
        console.log("Update failed: " + error.message)
    });;
}

module.exports = (req, res) => {
    var id = req.body.id,
    address = req.body.address,
    phonenumber = req.body.phonenumber;

    //console.log(connectApp(login,pass))
    res.send(profil_save(id,address,phonenumber))
 };