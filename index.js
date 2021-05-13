const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 4000;

const app = express();
const todoRouter = require("./routes/todoRouter");
const connectOptions = { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false };

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost/todolist", connectOptions)
    .then(() => console.log("Connected successfully to DB"))
    .catch((err) => console.error(err));

app.use("/todos", todoRouter);

app.listen(PORT, () => {
    console.log(`Listening to Port: ${PORT}`);
});
