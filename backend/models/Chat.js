const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  title: {
    type: String,
    default: "New Chat"
  },
  messages: [
    {
      sender: String,
      text: String,
      createdAt: {
        type: Date,
        default: Date.now
      }
    }
  ]
}, {
  timestamps: true
});

module.exports = mongoose.model("Chat", chatSchema);
