const mongoose = require('mongoose');

const RiddleSchema = new mongoose.Schema({
    riddle: {
        type: String,
        required: true,
    },
    solution: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true
    }
});
const RiddleModel = mongoose.model("riddles", RiddleSchema, 'riddle');
module.exports = RiddleModel;