const Expense = require("../models/expense.model")


const createexpense = async (body) => {
    return await Expense.create(body);
};
const expenselist = async () => {
    return await Expense.find().populate('user', { Password: 0, Rol: 0, _id: 0, createdAt: 0, updatedAt: 0, __v: 0 });
};
const expenseByid = async (expenseid) => {
    return await Expense.findById(expenseid);
};
const deleteexpense = async (expenseid) => {
    return await Expense.findByIdAndDelete(expenseid);
};
const updataexpense = async (id, body) => {
    console.log("🚀 ~ updataexpense ~ body:", body)
    return Expense.findByIdAndUpdate(id , { $set: body }, { new: true });
};

const expenseCount = async (id) => {
    return await Expense.countDocuments({ user_id: id });
}

module.exports = {
    createexpense,
    expenselist,
    expenseByid,
    deleteexpense,
    updataexpense,
    expenseCount
}