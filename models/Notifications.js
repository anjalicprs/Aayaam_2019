let mongoose = require("mongoose");
let Schema = mongoose.Schema;

module.exports = mongoose.model(
  "notifications",
  new Schema({
    event_name: String,
    category: String,
    date: Date
    // priority:
  })
);
