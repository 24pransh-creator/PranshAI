import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Sidebar({ onSelectChat }) {
  const [chats, setChats] = useState([]);

  const loadChats = async () => {
    try {
      const res = await axios.get("https://pranshai.onrender.com/api/chat");
      setChats(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadChats();
  }, []);

  const newChat = async () => {
    try {
      const res = await axios.post("https://pranshai.onrender.com/api/chat");
      loadChats();
      onSelectChat(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        width: "280px",
        background: "#202123",
        color: "white",
        padding: "15px",
        height: "100vh",
        overflowY: "auto"
      }}
    >
      <button
        onClick={newChat}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "15px",
          cursor: "pointer"
        }}
      >
        + New Chat
      </button>

      {chats.map((chat) => (
        <div
          key={chat._id}
          onClick={() => onSelectChat(chat)}
          style={{
            padding: "10px",
            borderBottom: "1px solid #444",
            cursor: "pointer"
          }}
        >
          {chat.title}
        </div>
      ))}
    </div>
  );
}
