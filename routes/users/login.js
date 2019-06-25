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
        let obj = await log(login,pass);
        let db_data;

        let user = {
            username: '',
            email: '',
            address: '',
            phonenumber: '',
            date: ''
        }
        
        await db.database().ref('user/' + obj.uid).once('value').then((snapshot) => {
            db_data = snapshot.val();
            user.username = db_data.username != null ? db_data.username : obj.displayName
            user.email = obj.email
            user.address = db_data.address
            user.phonenumber = db_data.phoneNumber
            user.date = db_data.date
        });

        res.send(user)
       })()

    //console.log("TCL: send", send)
 };