const express = require("express");
const router = express.Router();
const Chat = require("../models/Chat");

// Get all chats
router.get("/", async (req, res) => {
  try {
    const chats = await Chat.find().sort({ updatedAt: -1 });
    res.json(chats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get single chat
router.get("/:id", async (req, res) => {
  try {
    const chat = await Chat.findById(req.params.id);
    res.json(chat);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create chat
router.post("/", async (req, res) => {
  try {
    const chat = await Chat.create({
      title: "New Chat",
      messages: [],
    });

    res.json(chat);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Rename chat
router.put("/:id", async (req, res) => {
  try {
    const { title } = req.body;

    const chat = await Chat.findByIdAndUpdate(
      req.params.id,
      { title },
      { new: true }
    );

    res.json(chat);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete chat
router.delete("/:id", async (req, res) => {
  try {
    await Chat.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
