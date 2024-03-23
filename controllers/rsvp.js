const Person = require("../models/Person");
const Group = require("../models/group");
const No = require("../models/No");

const asyncHandler = require("express-async-handler");

// Display form
exports.yes_get = asyncHandler(async (req, res, next) => {
  // show form to RSVP
  res.render("yes.pug", {
    number: req.params.number,
  });
});

// save form
exports.yes_post = asyncHandler(async (req, res, next) => {
  // Create a new group
  const newGroup = new Group({});
  newGroup.save();

  // loop through form data
  for (let n = 1; n < parseInt(req.params.number) + 1; n++) {
    //console.log(req.body[`name${parseInt(n)}`]);
    const newPerson = new Person({
      name: req.body[`name${parseInt(n)}`],
      allergies: req.body[`allergies${parseInt(n)}`],
      diet: req.body[`diet${parseInt(n)}`],
      group: newGroup._id,
    });
    await newPerson.save();
  }
  // redirect to thank you - happy
  res.redirect(`/all`);
});

// Display cant come
exports.no_get = asyncHandler(async (req, res, next) => {
  res.render("no.pug");
});

// save cant come
exports.no_post = asyncHandler(async (req, res, next) => {
  const notComing = new No({
    people: req.body.name,
    message: req.body.message,
  });

  await notComing.save();
  //redirect to thank you - sad
  res.redirect("/all");
});
