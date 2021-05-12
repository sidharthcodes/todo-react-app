const router = require("express").Router();

router.get("/", (req, res) => {
    console.log("Index Page");
});

module.exports = router;