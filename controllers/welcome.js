const asyncHandler = require("express-async-handler");

// Display list of all Authors.
exports.index = asyncHandler(async (req, res, next) => {
  res.render("index.pug");
});

// Display list of all Authors.
exports.index_post = asyncHandler(async (req, res, next) => {
  res.redirect(`imcoming/${req.body.number}`);
});