const express = require("express");
const router = express.Router();
const Chat = require("../models/Chat");

// Get all chats
router.get("/", async (req, res) => {
  try {
    const chats = await Chat.find()
      .sort({ updatedAt: -1 });

    res.json(chats);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

// Get one chat
router.get("/:id", async (req, res) => {
  try {
    const chat = await Chat.findById(req.params.id);

    if (!chat) {
      return res.status(404).json({
        error: "Chat not found",
      });
    }

    res.json(chat);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

// Create new chat
router.post("/", async (req, res) => {
  try {
    const chat = await Chat.create({
      title: "New Chat",
      messages: [],
    });

    res.json(chat);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

// Delete chat
router.delete("/:id", async (req, res) => {
  try {
    await Chat.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

module.exports = router;
