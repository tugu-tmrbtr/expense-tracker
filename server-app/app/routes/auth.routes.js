const express = require("express");
const {
  createUser,
  loginUser,
  logoutUser,
  getUser,
} = require("../controllers/auth.controller");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/whoami", getUser);

module.exports = router;
