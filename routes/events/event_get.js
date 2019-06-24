
const firebase = require('firebase');
const db = require('../../firebaseConfig');
//console.log(db, 'ddbb');


const getData = () => {
    //console.log("bla");
    let result="";
    let myTable = db.database().ref('events');
    myTable.on('value', function(snapshot) {
        // console.log(snapshot.val())
        result = snapshot.val()
    });
    return result
}

module.exports = (req, res) => {
    console.log(getData())
    res.send(getData())
 };