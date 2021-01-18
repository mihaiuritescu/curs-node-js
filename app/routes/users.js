"use strict"

const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/users");
const helperCtrl = require("../helpers");

router.get("/", function (req, res) {
  res.send("Aloha!");
})

router.get("/users", 
  userCtrl.getUsers,
  helperCtrl.responseToJson("users")
)

router.get("/users/:userId", 
  userCtrl.getUserById,
  helperCtrl.responseToJson("users")
)

router.post("/users", 
  userCtrl.createUser,
  helperCtrl.responseToJson("users")
)

router.delete("/delete/:userId", 
  userCtrl.getUserById,
  userCtrl.deleteUserById,
  helperCtrl.responseToJson("users")
)

module.exports = router;