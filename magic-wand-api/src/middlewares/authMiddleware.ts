import express  from 'express';
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
const SECRET_KEY = process.env.ACCESS_TOKEN_SECRET;
dotenv.config();

export const authenticateToken = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const authHeader = req.headers["authorization"];
  // console.log(req.headers);
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Neautorizovan pristup" });
  }

  try {
    const user = jwt.verify(token, SECRET_KEY);
    console.log("user verifikacija: ", user);
    // req.user = user;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Nevalidan token", error: error });
  }
};
