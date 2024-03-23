const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Person = new Schema({
  group: { type: Schema.Types.ObjectId, ref: "Group", required: true }, // reference to the associated book
  name: { type: String, required: true },
  diet: {
    type: String,
    required: true,
    enum: ["Vegan", "Vegetarian", "Meat"],
    default: "Meat",
  },
  allergies: { type: String },
});

// Export model
module.exports = mongoose.model("Person", Person);
