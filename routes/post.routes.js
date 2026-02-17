const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("View all posts");
});
router.get("/new", (req, res) => {
  res.send("create a new post");
});

export default router;
