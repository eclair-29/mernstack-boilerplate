const mongoose = require("mongoose");

// Initialize schema
const NewSchema = mongoose.Schema;

// Create Info scehema
const InfoSchema = new NewSchema({
  fname: String,
  lname: String,
  github_page_URL: String,
  github_repo_URL: String,
  version: String
});

// Create model
const Info = mongoose.model("info", InfoSchema, "info");
module.exports = Info;
