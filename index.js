"use strict";

const express = require("express");

const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || "127.0.0.1";

const { dbConnection } = require('./src/configs/dbConnection')
dbConnection()

app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "welcome to blog app server",
  });
});
app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}`));
