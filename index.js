const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

const app = express();
const todoRouter = require("./routes/todoRouter");
const connectOptions = { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false };

mongoose.connect("mongodb://localhost/todolist", connectOptions)
    .then(() => console.log("Connected successfully"))
    .catch((err) => console.error(err));

app.use("/todo", todoRouter);

app.listen(PORT, () => {
    console.log(`Listening to Port: ${PORT}`);
});