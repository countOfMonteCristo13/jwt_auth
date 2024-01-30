const router = require("express").Router();
const wandRoutes = require("./wandRoutes");
const userRoutes = require("./userRoutes");

router.use("/wands", wandRoutes);
router.use("/auth", userRoutes);

module.exports = router;
