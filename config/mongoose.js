const mongoose = require('mongoose');  //requiring the library

mongoose.connect('mongodb://localhost/Task_Info_db');  //connect to the databse

const db = mongoose.connection; //acquire connection if it is successful

db.on('error', console.error.bind(console, "Error connecting database")); //now an error fired if didn't connect with database

db.once('open', function(){ //if connection is siccessfully done then prints this message
    console.log("Successfully connected to data base");
});
