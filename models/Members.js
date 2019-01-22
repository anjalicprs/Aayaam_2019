let mongoose = require("mongoose");
let Schema = mongoose.Schema;

module.exports = mongoose.model(
  "members",
  new Schema({
    name: String,
    photourl: String,
    dept: String,
    passingyear: Number,
     batch: Number,
    priority: Number
  })
);
