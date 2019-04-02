/* eslint no-console: "off" */
const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const path = require("path");
const info = require("./routes/api/info");

// DB and app initialization
const db = config.get("mongodbURI");
const dbConnectionOptions = {
  useNewUrlParser: true
};

const app = express();

// Use body parser middleware
app.use(express.json());

// Connect to MongoDB
const runDB = async () => {
  try {
    await mongoose.connect(db, dbConnectionOptions);
    console.log("MongoDB connection established");
  } catch (err) {
    console.log(`ERROR - ${err}`);
  }
};

runDB();

// Use API routes
app.use("/api/v.1", info);

// Serve static assets (build) if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Listen to a port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App is running port ${PORT}`));
