let mongoose = require("mongoose");

const server = "localhost:27017";
const database = "chakra";

module.exports.initDb = () => {
  mongoose.connect(
    `mongodb://${server}/${database}`,
    { useNewUrlParser: true }
  );
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error!"));
  db.once("open", () => {
    console.log("connected to database...");
    Blog = require("../models/Blog");
    Members = require("../models/Members");
    Notifications = require("../models/Notifications");
  });
};
