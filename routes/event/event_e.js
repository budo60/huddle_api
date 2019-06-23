const firebase = require('firebase');
const db = require('../../firebaseConfig');
//console.log(db, 'ddbb');


const event_e = (id,name,desc,max,address,date,stuff) => {
    db.auth()
    db.database().ref('events/' + id).push({
        eventName: name,
        eventDesc: desc,
        eventMaxPeople: max,
        eventAdress: address,
        eventDate: date,
        eventStuff: stuff
    });
}

module.exports = (req, res) => {
    var owner = req.body.id,
    name = req.body.name,
    desc = req.body.desc,
    max = req.body.max,
    address = req.body.address,
    date = req.body.date,
    stuff = req.body.stuff;

    //console.log(connectApp(login,pass))
    res.send(event_e(owner,name,desc,max,address,date,stuff))
 };