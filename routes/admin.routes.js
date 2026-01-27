const express = require("express");
const router = express.Router();

const {
  loginAdmin,
  createAdmin,
  forgotPassword,
  resetPassword,
  getProfile,
} = require("../controllers/admin.controller");

const adminAuth = require("../middleware/adminAuth");

router.post("/login", loginAdmin);
router.post("/create", createAdmin);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);
router.get("/profile", adminAuth, getProfile);

module.exports = router;
