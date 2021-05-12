const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    title: String,
    completed: Boolean
});

module.export = mongoose.model("Todo", TodoSchema);