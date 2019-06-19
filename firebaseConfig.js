const firebase = require('firebase');

const config = {
    apiKey: "AIzaSyDuvHAGO0jZCq-_5zjoidJkPW9bvDa0pic",
    authDomain: "huddle-svs.firebaseapp.com",
    databaseURL: "https://huddle-svs.firebaseio.com",
    projectId: "huddle-svs",
    storageBucket: "huddle-svs.appspot.com",
    messagingSenderId: "468617751673"
};


module.exports =  firebase.initializeApp(config);



