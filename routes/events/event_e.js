const firebase = require('firebase');
const db = require('../../firebaseConfig');
//console.log(db, 'ddbb');


const event_e = (id,name,desc,max,address,date,stuff) => {
    db.auth()
    db.database().ref('events/' + id).update({
        eventName: name,
        eventDesc: desc,
        eventMaxPeople: max,
        eventAdress: address,
        eventDate: date,
        eventStuff: stuff
    }).then(function() {
        console.log("Update succeeded.")
    })
    .catch(function(error) {
        console.log("Update failed: " + error.message)
    });

}

module.exports = (req, res) => {
    var id = req.params.event_id,
    name = req.body.name,
    desc = req.body.desc,
    max = req.body.max,
    address = req.body.address,
    date = req.body.date,
    stuff = req.body.stuff;

    //console.log(connectApp(login,pass))
    res.send(event_e(id,name,desc,max,address,date,stuff))
 };