
const firebase = require('firebase');
const db = require('../../firebaseConfig');
//console.log(db, 'ddbb');


function getData (){
   // let obj = "";
    try{
        return db.database().ref('events').once("value", (snapshot) => {
            return snapshot.val();
        });
    }catch(error){
        console.log("ERROR => ",error);
    }
}

    // var obj;
    //     await db.database().ref('events').once('value').then((snapshot) => {
    //         obj = snapshot.val();
    //     });

module.exports = (req, res) => {
    return (async function(){
        const obj = await getData();
        res.send(obj)
    })()
 };