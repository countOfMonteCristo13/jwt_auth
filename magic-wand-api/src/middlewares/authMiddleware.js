require("dotenv").config();
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.ACCESS_TOKEN_SECRET;

exports.authenticateToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  // console.log(req.headers);
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Neautorizovan pristup" });
  }

  try {
    const user = jwt.verify(token, SECRET_KEY);
    console.log(user);
    req.user = user;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Nevalidan token", error: error });
  }
};
