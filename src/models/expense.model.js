const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  paymentMethod: {
    type: String,
    enum: ['cash', 'credit'],
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
}, { timestamps: true });



const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;
