import React, { useState } from "react";
import axios from "axios";

function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = message;

    setMessages((prev) => [
      ...prev,
      { sender: "You", text: userMessage },
    ]);

    setMessage("");

    try {
      const res = await axios.post(
        "https://pranshai.onrender.com/api/ai/chat",
        {
          message: userMessage,
        }
      );

      setMessages((prev) => [
        ...prev,
        {
          sender: "Pransh AI",
          text: res.data.reply,
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "Pransh AI",
          text: "❌ AI Server Error",
        },
      ]);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0f172a",
      color: "white",
      padding: "20px"
    }}>
      <h1>🤖 Pransh AI</h1>

      <div style={{
        height: "70vh",
        overflowY: "auto",
        background: "#1e293b",
        padding: "15px",
        borderRadius: "10px",
        marginBottom: "15px"
      }}>
        {messages.map((msg, i) => (
          <p key={i}>
            <b>{msg.sender}:</b> {msg.text}
          </p>
        ))}
      </div>

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask anything..."
        style={{
          width: "75%",
          padding: "12px"
        }}
      />

      <button
        onClick={sendMessage}
        style={{
          padding: "12px 20px",
          marginLeft: "10px"
        }}
      >
        Send
      </button>
    </div>
  );
}

export default Chat;
