import { addUser, getUser } from '../controllers/userController';
import express from 'express'

const router = express.Router();

router.post("/add-user", addUser);
router.get("/get-users/:id", getUser);

export default router;
