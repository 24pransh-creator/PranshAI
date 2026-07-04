const express = require("express");
const router = express.Router();

const {
  chat,
  getChats,
} = require("../controllers/chatController");

router.post("/send", chat);
router.get("/history/:userId", getChats);

module.exports = router;
