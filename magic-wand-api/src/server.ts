import express from 'express'
import cors from 'cors'
import db from './db/db'
import router from './routes/index'
import dotenv from 'dotenv'

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3001;

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use("/api", router);

app.listen(PORT, () => {
  db();
  console.log(`Listening on PORT:${PORT}`);
});
