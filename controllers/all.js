const Person = require("../models/Person");
const No = require("../models/No");
const asyncHandler = require("express-async-handler");

// Display list of all Authors.
exports.all_get = asyncHandler(async (req, res, next) => {
  const coming = await Person.find().sort({ group: 1, name: 1 }).exec();
  const notComing = await No.find().exec();

  // group people for better layout
  const grouped = coming.reduce((obj, person) => {
    const { group } = person;
    if (!obj[group]) {
      obj[group] = [];
    }
    obj[group].push(person);
    return obj;
  }, {});

  // remove commas from diets for csv
  const csv = coming.map((person) => {
    person.allergies = person.allergies.replace(/,/g, " / ");
    return person
  })  

  res.render("all.pug", {
    grouped: grouped,
    coming: csv,
    notComing: notComing,
  });
});