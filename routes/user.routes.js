const express = require("express");
const router = express.Router();
const { getProfile, updateProfile } = require("../controllers/user.controller");

router.get("/profile", authMiddleware, getProfile);
router.put("/profile, updateProfile");

module.exports = router;
