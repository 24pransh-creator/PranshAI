import React, { useEffect, useState } from "react";

export default function Sidebar({ onSelectChat }) {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    fetch("https://pranshai.onrender.com/api/chat")
      .then((res) => res.json())
      .then((data) => setChats(data))
      .catch(console.error);
  }, []);

  return (
    <div style={{
      width: "300px",
      background: "#202123",
      color: "white",
      height: "100vh",
      overflowY: "auto",
      padding: "10px"
    }}>
      <button
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "15px"
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
          {chat.userMessage.substring(0, 30)}...
        </div>
      ))}
    </div>
  );
}
