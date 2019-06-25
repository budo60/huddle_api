
const firebase = require('firebase');
const db = require('../../firebaseConfig');
//console.log(db, 'ddbb');


const getData =  async (id) => {
    //console.log(id);
    var obj;
    try{
        await db.database().ref('user/' + id).once("value", (snapshot) => {
            console.log(snapshot.val().list_part);
            obj = snapshot.val().list_part;
        });
        return obj;
    }catch(error){
        console.log("ERROR => ",error);
    }
}

module.exports = (req, res) => {
    return (async function(){
        var idParticipant=req.params.id_user;
        const obj = await getData(idParticipant);
        res.send(obj)
    })()
 };