const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Group = new Schema({});

// Export model
module.exports = mongoose.model("Group", Group);