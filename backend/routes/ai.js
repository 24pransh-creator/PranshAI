const express = require("express");
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const Chat = require("../models/Chat");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post("/chat", async (req, res) => {
  try {
    const { message, chatId } = req.body;

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const result = await model.generateContent(message);
    const reply = result.response.text();

    let chat;

    if (chatId) {
      chat = await Chat.findById(chatId);
    }

    if (!chat) {
      chat = await Chat.create({
        title: message.substring(0, 30),
        messages: [],
      });
    }

    chat.messages.push({
      sender: "You",
      text: message,
    });

    chat.messages.push({
      sender: "Pransh AI",
      text: reply,
    });

    await chat.save();

    res.json({
      reply,
      chatId: chat._id,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      reply: "AI Error",
    });
  }
});

module.exports = router;
