const firebase = require('firebase');
const db = require('../../firebaseConfig');
//console.log(db, 'ddbb');


const event_d = (idEvent) => {
    db.auth()
    var adaRef = db.database().ref.ref('events/' + idEvent);
    adaRef.remove()
    .then(function() {
        console.log("Remove succeeded.")
    })
    .catch(function(error) {
        console.log("Remove failed: " + error.message)
    });

}

module.exports = (req, res) => {
    var idEvent = req.body.idEvent
    

    //console.log(connectApp(login,pass))
    res.send(event_d(idEvent))
 };