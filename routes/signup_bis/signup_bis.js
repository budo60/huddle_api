const firebase = require('firebase');
const db = require('../../firebaseConfig');
//console.log(db, 'ddbb');


const addInfo = (id,address,date) => {
    const userId = id;
    db.database().ref('user/' + userId).set({
      address: address,
      date: date
    });
}

module.exports = (req, res) => {
    var id = req.params.id,
    address = req.params.address,
    date = req.params.date;

    //console.log(connectApp(login,pass))
    res.send(addInfo(id,address,date))
 };