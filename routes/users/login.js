const firebase = require('firebase');
const db = require('../../firebaseConfig');
//console.log(db, 'ddbb');


// const log = (login,pass) => {
//     db
//     .auth()
//     .signInWithEmailAndPassword(login, pass)
//     //.then(() => {  })
//     .catch( error => console.log(error.message))
//     return db.auth().currentUser.uid;
// }

async function log (login,pass){
    try{
       await db.auth().signInWithEmailAndPassword(login,pass);
       return db.auth().currentUser;
    }catch(error){
        console.log(error);
    }
}



module.exports = (req, res) => {
    return (async function(){
        var login = req.body.login,
        pass = req.body.password;
        const obj = await log(login,pass);
        res.send(obj)
       })()

    //console.log("TCL: send", send)
 };