"use strict"

const User = require("../models/users");

module.exports = {
  midd2: midd2,
  midd3: midd3,
  createUser: createUser
}

function midd2(req, res, next) {
  console.log("users route second mid");
  console.log("body: ", req.body);
  next();
}

function midd3(req, res, next) {
  console.log("users route third mid");
  return res.json({text: "the end"});
}

function createUser(req, res, next) {
  const user = new User(req.body);

  user.save(function(err, result) {
    if(err) {
      console.log("err", err);
    }
    return res.json(result);
  })

}