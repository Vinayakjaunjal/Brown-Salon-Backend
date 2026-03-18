const express = require("express");
const router = express.Router();

router.get("/profile", (req, res) => {
  res.json({
    success: true,
    data: {
      name: "Vinayak Jaunjal",
      email: "vinayak@test.com",
      phone: "8208027615",
    },
  });
});

module.exports = router;
