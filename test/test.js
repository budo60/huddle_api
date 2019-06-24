const axios = require('axios');

// axios.post('http://86.245.96.127:8002/users/login', {
    axios.post('http://localhost:8002/users/login', {
    login: 'huddle@yopmail.com',
    password: 'password'
}).then(function(res) {
    console.log("test ->>",res.data);
}).catch(function(error){
    console.log(error)
    //reject()
});