const express = require("express");
const Info = require("../../models/Info");

// Initialize router
const router = express.Router();

// route: GET /api/v.1/
// description: fetch app information from DB
// access: public
router.get("/", (req, res) => {
  Info.findOne(null, { _id: 0, __v: 0 })
    .then(data => res.json(data));
});

module.exports = router;
