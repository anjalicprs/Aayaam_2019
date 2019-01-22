var express = require("express");
var router = express.Router();

router.get("/contact", (req, res, next) => {
  res.render("pages/index");
});

module.exports = router;
