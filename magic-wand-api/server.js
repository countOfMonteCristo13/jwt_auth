const express = require("express");
const cors = require("cors");
const { db } = require("./db/db");
const routes = require("./routes/index");

require("dotenv").config();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(cors(corsOptions));

app.use("/api", routes);

app.listen(PORT, () => {
  db();
  console.log(`Listening on PORT:${PORT}`);
});
