const mongoose = require("mongoose");

const ApplicationSchema = mongoose.Schema({
  name: String,
  tel: String,
  email: String,
  type: String,
  body: String,
  file: String,
  status: { type: String, default: "pending" },
  date: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Application", ApplicationSchema);
