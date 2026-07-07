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
    const res = await axios.post(
      "https://pranshai.onrender.com/api/chat"
    );

    loadChats();

    if (onSelectChat) {
      onSelectChat(res.data);
    }
  };

  const renameChat = async (chat) => {
    const title = prompt("Enter new chat name", chat.title);

    if (!title) return;

    await axios.put(
      `https://pranshai.onrender.com/api/chat/${chat._id}`,
      { title }
    );

    loadChats();
  };

  const deleteChat = async (id) => {
    await axios.delete(
      `https://pranshai.onrender.com/api/chat/${id}`
    );

    loadChats();
  };

  return (
    <div
      style={{
        width: "280px",
        background: "#202123",
        color: "white",
        height: "100vh",
        overflowY: "auto",
      }}
    >
      <button
        onClick={newChat}
        style={{
          width: "90%",
          margin: "15px",
          padding: "12px",
          border: "none",
          borderRadius: "10px",
          background: "#10a37f",
          color: "white",
          cursor: "pointer",
        }}
      >
        + New Chat
      </button>

      {chats.map((chat) => (
        <div
          key={chat._id}
          style={{
            padding: "12px",
            borderBottom: "1px solid #333",
          }}
        >
          <div
            onClick={() => onSelectChat(chat)}
            style={{
              cursor: "pointer",
              marginBottom: "10px",
            }}
          >
            💬 {chat.title}
          </div>

          <button
            onClick={() => renameChat(chat)}
            style={{
              marginRight: "8px",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "6px",
              padding: "6px 10px",
              cursor: "pointer",
            }}
          >
            ✏️ Rename
          </button>

          <button
            onClick={() => deleteChat(chat._id)}
            style={{
              background: "#dc2626",
              color: "white",
              border: "none",
              borderRadius: "6px",
              padding: "6px 10px",
              cursor: "pointer",
            }}
          >
            🗑 Delete
          </button>
        </div>
      ))}
    </div>
  );
}
