require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT;

const db = require("./config/mongoose");

app.use(express.json());
app.use("*", cors());



app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});
