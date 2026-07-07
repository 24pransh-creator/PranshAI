import React, { useState } from "react";
import axios from "axios";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import ChatWindow from "../components/ChatWindow";
import ChatInput from "../components/ChatInput";
import TypingIndicator from "../components/TypingIndicator";

function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const [chatId, setChatId] = useState(null);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = message;

    setMessages((prev) => [
      ...prev,
      { sender: "You", text: userMessage },
    ]);

    setMessage("");
    setTyping(true);

    try {
      const res = await axios.post(
        "https://pranshai.onrender.com/api/ai/chat",
        {
          message: userMessage,
          chatId,
        }
      );

      setTyping(false);

      if (res.data.chatId) {
        setChatId(res.data.chatId);
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "Pransh AI",
          text: res.data.reply,
        },
      ]);
    } catch (err) {
      setTyping(false);

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
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar onSelectChat={() => {}} />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          background: "#343541",
        }}
      >
        <Header />

        <ChatWindow messages={messages} />

        {typing && <TypingIndicator />}

        <ChatInput
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
}

export default Chat;
