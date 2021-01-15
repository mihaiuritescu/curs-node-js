"use strict"

const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/users");
const AuthCtrl = require("../controllers/autorization");

router.get("/", function (req, res) {
  res.send("Aloha!");
})

router.get("/users", 
  AuthCtrl.checkIfAdmin, 
  userCtrl.midd2, 
  userCtrl.midd3
)

router.post("/users", 
  userCtrl.createUser
)

router.put("/users", 
  AuthCtrl.checkIfAdmin, 
  function (req, res, next) {
    console.log("users put route");
    return res.json({text: "hello put"});
})

module.exports = router;