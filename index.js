const express = require("express");
const PORT = process.env.PORT || 3000;

const app = express();
const todoRouter = require("./routes/todoRouter");

app.use("/todo", todoRouter);

app.listen(PORT, () => {
    console.log(`Listening to Port: ${PORT}`);
});