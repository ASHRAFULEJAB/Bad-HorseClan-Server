const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const jwt = require("jsonwebtoken");
require("dotenv").config();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Horse Game is runnning...");
});
app.listen(port, () => {
  console.log(`Horse Game is running on ${port}`);
});
