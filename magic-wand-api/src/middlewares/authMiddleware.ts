import express  from 'express';
import dotenv from 'dotenv'
import jwt, { JwtPayload } from 'jsonwebtoken'
const SECRET_KEY = process.env.ACCESS_TOKEN_SECRET;
dotenv.config();

export interface UserRequest extends Request{
  user: string | JwtPayload
}

export const authenticateToken = async (req: UserRequest, res: express.Response, next: express.NextFunction) => {
  const authHeader = req.headers.get("authorization");
  // console.log(req.headers);
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Neautorizovan pristup" });
  }

  try {
    const user: JwtPayload | string = jwt.verify(token, SECRET_KEY);
    console.log("user verif: ", user);
    req.user = user;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Nevalidan token", error: error });
  }
};
