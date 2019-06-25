const axios = require('axios');

// axios.post('http://86.245.96.127:8002/users/login', {
    //owner,name,desc,max,address,date,stuff
    axios.post('http://localhost:8002/events/add', {
        owner: 'iCgV9JOk7TcKBtxXXjbeeyZBuUR2',
        name: 'event de test route',
        desc: 'event de test route desc',
        max: 5,
        address: '1 rue du game',
        date: '2019-06-28',
        stuff: null

    }).then(function(res) {
    console.log("test ->>",res.data);
}).catch(function(error){
    console.log(error)
    //reject()
});



