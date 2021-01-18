"use strict"

const mongoose = require("mongoose")

module.exports = {
  initMongoose: initMongoose
}

function initMongoose() {
  mongoose.connect('mongodb://127.0.0.1/mihai', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })

  const db = mongoose.connection;

  db.on("error", function(err) {
    console.log("err", err);
  })

  db.once("open", function(err) {
    console.log("Connected to mongoDB");
  })

  process.on("SIGINT", cleanup);
  process.on("SIGTERM", cleanup);
  process.on("SIGHUP", cleanup);
}

function cleanup() {
  console.log("cleanup");

  mongoose.connection.close(function() {
    process.exit();
  })
}