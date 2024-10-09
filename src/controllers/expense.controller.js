const expense_service = require("../services/expense.service");


const addExpense = async (req, res) => {
  try {
    console.log("🚀 ~ addExpense ~ body.req.body:", req.body)
    if (!req.body.amount || !req.body.category || !req.body.paymentMethod) {
      return res.status(404).json({ message: "all fields are required" });
    }
    console.log("🚀 ~ addExpense ~ body. req.user._id:", req.user._id)
    const body = {
      user: req.user._id,
      amount: req.body.amount,
      category: req.body.category,
      paymentMethod: req.body.paymentMethod,
    };
    const expense = await expense_service.createexpense(body);
    console.log("🚀 ~ addExpense ~ expenseid:", expense._id);
    return res.status(200).json({ message: "expense created successfully", data: expense });
  } catch (error) {
    console.error("Error in addExpense:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


const expenselist = async (req, res) => {
  try {
    const list = await expense_service.expenselist();
    return res.status(200).json({ message: "expense list", data: list });
  } catch (error) {
    console.log("🚀 ~ expenselist ~ error:", error)
    return res.status(500).json({ message: error.message });
  }
};

const expenseupdate = async (req, res) => {
  const expenseid = req.body.Id;
  console.log("🚀 ~ expenseupdate ~ expenseid:", expenseid);
  try {
    const expenseExists = await expense_service.expenseByid(expenseid);
    console.log("🚀 ~ expensedelete ~ expenseExists:", expenseExists);
    if (!expenseExists) {
      return res.status(400).json({ message: "expense Not Exists" });
    }
    console.log("🚀 ~ expenseupdate ~ req.body.amount:", req.body.amount)
    console.log("🚀 ~ expenseupdate ~ req.body.category:", req.body.category)
    console.log("🚀 ~ expenseupdate ~ req.body.paymentMethod:", req.body.paymentMethod)
    const body = {};
    if (req.body) {
      body.amount = req.body.amount,
      body.category = req.body.category,
      body.paymentMethod = req.body.paymentMethod
    }
    console.log("🚀 ~ expenseupdate ~ body:", body);
    const update = await expense_service.updataexpense(expenseid, body);
    return res.status(200).json({ message: "expense Updata successfully", data: update });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


const expensedelete = async (req, res) => {
  const expenseid = req.body.Id;
  console.log("🚀 ~ expensedelete ~ expenseid:", expenseid);
  try {
    const expenseExists = await expense_service.expenseByid(expenseid);
    console.log("🚀 ~ expensedelete ~ expenseExists:", expenseExists);
    if (!expenseExists) {
      return res.status(400).json({ message: "expense Not Exists" });
    }
    const delet = await expense_service.deleteexpense(expenseid)
    return res.status(200).json({ message: "expense Delete Successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};



module.exports = {
  addExpense,
  expenselist,
  expenseupdate,
  expensedelete
}