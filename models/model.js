const mongoose = require('mongoose');

const TaskSchema =  new mongoose.Schema({

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