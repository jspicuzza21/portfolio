const path = require("path");
const chalk = require("chalk");
const app = require("./server");
const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3000;
const PUBLIC_PATH = path.join(__dirname, "../../public");
const DIST_PATH = path.join(__dirname, "../../dist");
const ASSETS_PATH = path.join(__dirname, "../../client/assets");
const IMAGES_PATH = path.join(__dirname, "../../client/images");

// Apply CORS and JSON parsing first
app.use(cors());
app.use(express.json());

// Serve static files BEFORE any routes
// The order here is important - it will check each directory in sequence
app.use(express.static(DIST_PATH)); // Check dist first for main.js
app.use(express.static(PUBLIC_PATH));
app.use(express.static(ASSETS_PATH));
app.use(express.static(IMAGES_PATH));

// API routes would go here
// app.use('/api', apiRoutes);

// This catch-all route should be LAST
app.get("*", (req, res) => {
  res.sendFile(path.join(PUBLIC_PATH, "./index.html"));
});

const startServer = () =>
  new Promise((res) => {
    app.listen(PORT, () => {
      console.log(chalk.green(`Server listening on port ${PORT}`));
      res();
    });
  });

module.exports = {
  startServer,
  app,
};
