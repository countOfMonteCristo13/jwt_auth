const { addUser, getUser } = require("../controllers/user");

const router = require("express").Router();

router.post("/add-user", addUser);
router.get("/get-users/:id", getUser);

module.exports = router;
