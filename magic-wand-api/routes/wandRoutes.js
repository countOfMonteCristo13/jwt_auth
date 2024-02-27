const {
  getWands,
  getWand,
  addWand,
  protected,
} = require("../controllers/wandController");
const { authenticateToken } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.post("/", authenticateToken, addWand);
router.get("/", getWands);
router.get("/protected", authenticateToken, protected);
router.get("/:id", authenticateToken, getWand);

module.exports = router;
