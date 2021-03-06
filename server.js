"use strict"

const express = require("express");
const app = express();
const config = require('./config/index');

require("./config/express").initExpress(app);
require("./config/routes").initRoutes(app);
require("./config/mongoose").initMongoose();
require("./config/finalRoute").finalRoute(app);
require("./config/handlingError").handlingError(app);

app.listen(3002, function() {
  console.log(`App listening on port ${config.PORT}`);
})