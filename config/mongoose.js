const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Task_Info_db');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting database"));

db.once('open', function(){
    console.log("Successfully connected to data base");
});
