const express = require("express");
const expense_controller = require("../controllers/expense.controller");
const router = express.Router();
const { authUser,authorizeAdmin } = require("../middleware/auth");



router.post("/createexpense",  authUser, expense_controller.addExpense);
router.get("/expenselist", authUser, expense_controller.expenselist);
router.put("/expenseupdate",authUser, expense_controller.expenseupdate);
router.delete("/expensedelete", authUser, expense_controller.expensedelete);




module.exports = router;
