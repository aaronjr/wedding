const Person = require("../models/Person");
const No = require("../models/No");
// const Group = require("../models/group");

const asyncHandler = require("express-async-handler");

// Display list of all Authors.
exports.all_get = asyncHandler(async (req, res, next) => {
  const coming = await Person.find().sort({ group: 1, name: 1 }).exec();
  const notComing = await No.find().exec();
  //const groups = await Group.find().exec();

  res.render("all.pug", {
    coming: coming,
    notComing: notComing,
  });
});
