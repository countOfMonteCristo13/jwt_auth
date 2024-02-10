const { getWands, getWand, addWand } = require("../controllers/wandController");

const router = require("express").Router();

router.post("/", addWand);
router.get("/", getWands);
router.get("/:id", getWand);

module.exports = router;
