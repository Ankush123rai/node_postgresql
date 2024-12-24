const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const studentRoutes = require("./src/route/student.route");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/students", studentRoutes);

module.exports = app;
