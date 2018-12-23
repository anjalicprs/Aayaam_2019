let mongoose = require("mongoose");
let Schema = mongoose.Schema;

module.exports = mongoose.model(
  "members",
  new Schema({
    name: String,
    photourl: String,
    dept: String,
    id: ObjectId
    passingyear: Number,
     batch: Number,
    priority: Number
  })
);
