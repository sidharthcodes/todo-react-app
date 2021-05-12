const router = require("express").Router();
const mongoose = require("mongoose");

router.get("/", (req, res) => {
    console.log("Index Page");
});

mongoose.connect("mongodb://localhost/todolist")
    .then(() => { console.log("Connect to DB successfully") })
    .catch((err) => console.error(err));

module.exports = router;