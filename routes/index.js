const express = require("express");
const router = express.Router();

// Require controller modules.
const all = require("../controllers/all");
const rsvp = require("../controllers/rsvp");
const thankyou = require("../controllers/thankyou");
const welcome = require("../controllers/welcome");

// Quick form to redirect ot RSVP yes or no
router.get("/", welcome.index);

// get numbers
router.post("/", welcome.index_post);

// GET request rsvp yes
router.get("/imcoming/:number", rsvp.yes_get);

// POST saving form details.
router.post("/imcoming/:number", rsvp.yes_post);

// GET request rsvp yes
router.get("/icantcome", rsvp.no_get);

// POST saving form details.
router.post("/icantcome", rsvp.no_post);

// for Aimee and George to see guests
router.get("/thankyou", thankyou.thanks_get);

// for Aimee and George to see guests
router.get("/sorryyoucouldntmakeit", thankyou.sorry_get);

// for Aimee and George to see guests
router.get("/all", all.all_get);

module.exports = router;
