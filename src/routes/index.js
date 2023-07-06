require("express")
const main = require("../components/main/network")
const allRoutes = require("../utils/constants/routes.json")

// arrow functions - funciones flecha
const routes = server => {
    server.use(allRoutes.main, main)
}

module.exports = routes;
