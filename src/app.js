const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hello from pipeline-demo",
    environment: process.env.APP_ENV || "local",
    version: process.env.APP_VERSION || "dev",
  });
});

app.get("/health", (req, res) => res.json({ status: "broken" }));

module.exports = app;