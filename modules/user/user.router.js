const { getAllUsers, signup,getUserDetails, login  } = require("./user.controller");

const router = require("express").Router();

router.get("/getAll", getAllUsers);
router.post("/signup", signup);
router.get("/getUserDetails/:id", getUserDetails);
router.get("/login", login);

module.exports = router;
