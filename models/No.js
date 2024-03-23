const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const No = new Schema({
  people: { type: String, required: true },
  message: { type: String },
});

// Export model
module.exports = mongoose.model("No", No);
