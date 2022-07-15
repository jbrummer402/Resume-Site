const blogRoutes = require("./blogRoutes");

const constructorMethod = (app) => {
  app.use("/blog", blogRoutes);

  app.use("*", (_, res) => {
    res.sendStatus(404);
  });
};

module.exports = constructorMethod;
