let mongoose = require("mongoose");
let Schema = mongoose.Schema;

module.exports = mongoose.model(
  "blog",
  new Schema({
    blog_content: String,
    category: String,
    author: String
  })
);
