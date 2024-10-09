const User = require("../models/user.model");
const mongoose = require("mongoose");
const register = async (body) => {
  return User.create(body);
};


const findemail = async (email) => {
  return await User.findOne({ Email: email });
};

const userupdate = async (userid, body) => {
  return await User.findByIdAndUpdate(userid, { $set: body }, { new: true });
};
const deleteUser = async (userid, taskid) => {
  await User.findByIdAndDelete(userid);
};


module.exports = {
  register,
  findemail,
  userupdate,
  deleteUser,
};
