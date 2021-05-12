const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

const app = express();
const todoRouter = require("./routes/todoRouter");


mongoose.connect("mongodb://localhost/todolist")
    .then(() => { console.log("Connect to DB successfully") })
    .catch((err) => console.error(err));

app.use("/todo", todoRouter);

app.listen(PORT, () => {
    console.log(`Listening to Port: ${PORT}`);
});