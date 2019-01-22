var express = require("express");
var mongoose = require("mongoose");
var path = require("path");
var favicon = require("express-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var bcrypt = require("bcryptjs");
// var models = require('./models');
// var sequelize = require("sequelize");
//var Admins = models.Admins;

var index = require("./routes/index");
//var register = require('./routes/register');
//var admin = require('./routes/admin');

var app = express();

let initDb = require("./config/mongoInit").initDb;
initDb();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/public")));

app.use(favicon(__dirname + "/public/images/favicon.png"));
// routes
app.use("/", index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error_404");
});

module.exports = app;
