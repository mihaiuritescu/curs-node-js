"use strict"

const path = require("path");

module.exports = {
  initRoutes: initRoutes
}

function initRoutes(app) {
  const routesPath = path.join(__dirname, "../app/routes");
  const routes = ["users"];

  routes.forEach(function(route) {
    const finalPath = `${routesPath}/${route}`;

    console.log("route", route);
    console.log("finalPath", finalPath);
    
    app.use(require(finalPath));
  })
}