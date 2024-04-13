const Person = require("../models/Person");
const No = require("../models/No");
const asyncHandler = require("express-async-handler");

// Display list of all Authors.
exports.all_get = asyncHandler(async (req, res, next) => {
  const coming = await Person.find().sort({ group: 1, name: 1 }).exec();
  const notComing = await No.find().exec();

  const grouped = coming.reduce((obj, person) => {
    const { group } = person;
    if (!obj[group]) {
      obj[group] = [];
    }
    obj[group].push(person);
    return obj;
  }, {});

  res.render("all.pug", {
    grouped: grouped,
    coming: coming,
    notComing: notComing,
  });
});
