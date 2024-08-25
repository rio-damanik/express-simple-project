const express = require("express");
const router = express.Router();

// JSON data
router.get("/data", (req, res) => {
  res.json({
    message: "Hello, this is a simple JSON response!",
    data: [1, 2, 3, 4, 5],
  });
});

module.exports = router;
