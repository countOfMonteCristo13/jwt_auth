const { hello, getWands, getWand, addWand } = require("../controllers/wand");

const router = require("express").Router();

router.get("/", hello);
router.post("/add-wand", addWand);
router.get("/get-wands", getWands);
router.get("/get-wands/:id", getWand);

module.exports = router;
