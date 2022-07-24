const blogRoutes = require("./blogRoutes");
const bodyParser = require("body-parser");
const express = require("express");

const constructorMethod = (app) => {
  app.use("/blog", blogRoutes);

  app.use("*", (req, res) => {
    res.sendStatus(404);
  });
};

module.exports = constructorMethod;
