const firebase = require('firebase');
const db = require('../../firebaseConfig');
//console.log(db, 'ddbb');


const event_add = (owner,name,desc,max,address,date,stuff) => {
    db.auth()
    var newEvents =  db.database().ref('events/').push({
        eventOwner: owner,
        eventName: name,
        eventDesc: desc,
        eventMaxPeople: max,
        eventAdress: address,
        eventDate: date,
        eventStuff: stuff
    }).getKey();
    var obj;
    db.database().ref('user/' + owner).once('value', (snapshot) => {
        obj=snapshot.val().list_owner;
        obj.push(newEvents)
        db.database().ref('user/' + owner).update({
            list_owner: obj
        })
    })

    //console.log(obj); 
   
}

module.exports = (req, res) => {
    var owner = req.body.owner,
    name = req.body.name,
    desc = req.body.desc,
    max = req.body.max,
    address = req.body.address,
    date = req.body.date,
    stuff = req.body.stuff;

    //console.log(connectApp(login,pass))
    res.send(event_add(owner,name,desc,max,address,date,stuff))
 };