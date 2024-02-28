import express from 'express';
import userRoutes from "./userRoutes";
import authRoutes from "./authRoutes";
import wandRoutes from './wandRoutes';

const router = express.Router();

router.use("/wands", wandRoutes);
router.use("/users", userRoutes);
router.use("/auth", authRoutes);

export default router;
