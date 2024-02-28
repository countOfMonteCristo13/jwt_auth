import express from 'express'
import {
  getWands,
  getWand,
  addWand,
  protecteds,
}  from "../controllers/wandController";
import { authenticateToken } from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/", authenticateToken, addWand);
router.get("/", getWands);
router.get("/protected", authenticateToken, protecteds);
router.get("/:id", authenticateToken, getWand);

export default router;
