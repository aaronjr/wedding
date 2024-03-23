const asyncHandler = require("express-async-handler");

// Display list of all Authors.
exports.thanks_get = asyncHandler(async (req, res, next) => {
  res.render("thanks.pug");
});

// Display list of all Authors.
exports.sorry_get = asyncHandler(async (req, res, next) => {
  res.render("sorry.pug");
});
