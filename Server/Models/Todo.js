const mongoose = require('mongoose'); // Fixed typo

const TodoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true, // Optional: You can enforce this field as required
    },
    done: {
        type: Boolean,
        default: false,
    },
});

const TodoModel = mongoose.model("todos", TodoSchema);
module.exports = TodoModel;
