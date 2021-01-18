"use strict"

const { json } = require("body-parser");
const User = require("../models/users");

module.exports = {
  createUser: createUser,
  getUsers: getUsers,
  getUserById: getUserById,
  deleteUserById: deleteUserById
}

function createUser(req, res, next) {
  const user = new User(req.body);

  user.save(function(err, result) {
    if(err) {
      return next(err);
    }
    req.resources.users = result;
    return next();
  })
}

function getUsers(req, res, next) {
  User.find(function(err, result) {
    if (err) {
      returnnext(error);
    }
    req.resources.users = result;
    return next();
  })
}

function getUserById(req, res, next) {
  const { userId } = req.params;
  User.findById({_id: userId}, function(err, result) {
    if (err) {
      return next(error);
    }
    req.resources.users = result;
    return next();
  })
}

function deleteUserById(req, res, next) {
  const { userId } = req.params;
  User.deleteOne({_id: userId}, function(err, result) {
    if (err) {
      return next(error);
    }
    return next();
  });
}