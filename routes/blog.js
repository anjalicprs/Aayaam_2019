var express = require("express");
var router = express.Router();

router.get("/blog", (req, res, next) => {
  res.render("pages/blog");
});

module.exports = router;
