const mongoose = require('mongoose');  //require the library

const TaskSchema =  new mongoose.Schema({  //all the data information which will be filled in the form

    Description: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
    Date: {
        type: Date
    }
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;