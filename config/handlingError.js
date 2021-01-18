"use strict"

module.exports = {
  handlingError: handlingError
}

function handlingError (app) {
  app.use(function(err, result) {
    console.log("error middleware", err);
    return result.status(err.statusCode || 400).json({
      status: "error",
      message: err && err.message || "Default error message"
    })
  })  
}