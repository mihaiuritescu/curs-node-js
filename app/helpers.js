"use strict"

module.exports = {
  getCurrentDate: getCurrentDate, 
  responseToJson: responseToJson
}

function getCurrentDate() {
  return new Date;
}

function responseToJson(propItem) {
  return function(req, res, next) {
    res.json(req.resources[propItem]);
  }
}