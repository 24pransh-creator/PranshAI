const express = require("express");
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const Chat = require("../models/Chat");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const result = await model.generateContent(message);
    const reply = result.response.text();

    await Chat.create({
      userMessage: message,
      aiReply: reply,
    });

    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      reply: "AI Error",
    });
  }
});

module.exports = router;
