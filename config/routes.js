"use strict"

const path = require("path");

module.exports = {
  initRoutes: initRoutes
}

function initRoutes(app) {
  const routesPath = path.join(__dirname, "../app/routes");
  const routes = ["users", "orders"];

  routes.forEach(function(route) {
    const finalPath = `${routesPath}/${route}`;
    app.use(require(finalPath));
  })
}