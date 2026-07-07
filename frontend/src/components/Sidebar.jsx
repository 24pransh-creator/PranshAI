import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Sidebar({ onSelectChat }) {
  const [chats, setChats] = useState([]);

  const loadChats = async () => {
    try {
      const res = await axios.get(
        "https://pranshai.onrender.com/api/chat"
      );
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
      const res = await axios.post(
        "https://pranshai.onrender.com/api/chat"
      );

      loadChats();

      if (onSelectChat) {
        onSelectChat(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteChat = async (id) => {
    try {
      await axios.delete(
        `https://pranshai.onrender.com/api/chat/${id}`
      );

      loadChats();
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
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <button
        onClick={newChat}
        style={{
          margin: "15px",
          padding: "12px",
          borderRadius: "10px",
          background: "#10a37f",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        + New Chat
      </button>

      <div
        style={{
          flex: 1,
          overflowY: "auto",
        }}
      >
        {chats.map((chat) => (
          <div
            key={chat._id}
            style={{
              padding: "12px",
              borderBottom: "1px solid #333",
              cursor: "pointer",
            }}
          >
            <div
              onClick={() => onSelectChat && onSelectChat(chat)}
            >
              💬 {chat.title}
            </div>

            <button
              onClick={() => deleteChat(chat._id)}
              style={{
                marginTop: "8px",
                background: "red",
                color: "white",
                border: "none",
                borderRadius: "6px",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              🗑 Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
