const express = require("express");
const Info = require("../../models/Info");

// Initialize router
const router = express.Router();

// route:       GET /api/v.1/
// description: fetch app information from DB
// access:      public
router.get("/", async (req, res, next) => {
  try {
    const data = await Info.findOne().select("-__v");
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
