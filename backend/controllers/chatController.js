const Chat = require("../models/Chat");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

exports.chat = async (req, res) => {
  try {
    const { userId, message } = req.body;

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const result = await model.generateContent(message);
    const reply = result.response.text();

    await Chat.create({
      userId,
      message,
      reply,
    });

    res.json({
      success: true,
      reply,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "AI Error",
    });
  }
};

exports.getChats = async (req, res) => {
  try {
    const { userId } = req.params;

    const chats = await Chat.find({ userId }).sort({
      createdAt: 1,
    });

    res.json(chats);
  } catch (err) {
    res.status(500).json({
      message: "Cannot load chats",
    });
  }
};
