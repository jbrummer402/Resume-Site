const express = require("express");

const app = express();
const configRoutes = require("./routes");

app.use(express.json());

// authentication middleware

configRoutes(app);

app.listen(3001, () => {
  console.log("We've now got a server!");
  console.log("Your routes will be running on http://localhost:3001");
});
