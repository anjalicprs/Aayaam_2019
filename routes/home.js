var express = require("express");
var router = express.Router();

router.get("/home", (req, res, next) => {
  res.render("pages/index");
});

module.exports = router;
