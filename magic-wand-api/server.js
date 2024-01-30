const express = require("express");
const cors = require("cors");
const { db } = require("./db/db");

require("dotenv").config();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  db();
  console.log(`Listening on PORT:${PORT}`);
});
