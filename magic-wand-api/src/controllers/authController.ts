import express from 'express'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import UserService from '../services/userService';
dotenv.config();

export const handleLogin = async (req: express.Request, res: express.Response) => {
  const { username, password } = req.body;

  const user = await UserService.getUser(username, password);

  if (!user) {
    return res.status(400).json({ message: "Incorrect username or password" });
  }

  const accessToken = jwt.sign({ username }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "10m",
  });
  console.log(accessToken);
  res.status(200).json({ accessToken: accessToken });
};
