import express from "express";
import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";

import adminAuth from "../middleware/adminAuth.js";

const router = express.Router();

router.get("/profile", adminAuth, (req, res) => {
  res.json(req.admin);
});

export default router;
