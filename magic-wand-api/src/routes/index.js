const router = require("express").Router();
const wandRoutes = require("./wandRoutes");
const userRoutes = require("./userRoutes");
const authRoutes = require("./authRoutes");

router.use("/wands", wandRoutes);
router.use("/users", userRoutes);
router.use("/auth", authRoutes);

module.exports = router;
