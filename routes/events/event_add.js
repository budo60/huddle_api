const firebase = require('firebase');
const db = require('../../firebaseConfig');
//console.log(db, 'ddbb');


const  event_add =  async (owner,name,desc,max,address,date,stuff) => {
    db.auth()
    var newEvents =  await db.database().ref('events/').push({
        eventOwner: owner,
        eventName: name,
        eventDesc: desc,
        eventMaxPeople: max,
        eventAdress: address,
        eventDate: date,
        eventStuff: stuff
    }).getKey();
    var obj;
    await db.database().ref('user/' + owner).once('value', (snapshot) => {
        console.log({snapshot: snapshot.val().list_owner})
        obj=snapshot.val().list_owner;
        obj.push(newEvents)
        db.database().ref('user/' + owner).update({
            list_owner: obj
        })
    })

    //console.log(obj); 
   
}

module.exports = (req, res) => {
    return (async function(){
        var owner = req.body.owner,
        name = req.body.name,
        desc = req.body.desc,
        max = req.body.max,
        address = req.body.address,
        date = req.body.date,
        stuff = req.body.stuff;
        await res.send(event_add(owner,name,desc,max,address,date,stuff))
    })()
 };