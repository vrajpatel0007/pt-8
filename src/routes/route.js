const express = require("express");
const routes = express.Router();
const userRoute = require("./user.route");
const adminRoute = require("./admin.route");
const expenseRoute = require("./expense.route");

routes.use("/user", userRoute);
routes.use("/admin", adminRoute)
routes.use("/expense", expenseRoute)

module.exports = routes;
