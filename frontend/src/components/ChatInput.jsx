import React from "react";

export default function ChatInput({
  message,
  setMessage,
  sendMessage,
}) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "15px",
        background: "#202123",
        borderTop: "1px solid #444"
      }}
    >
      <button
        style={{
          padding: "10px",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        📎
      </button>

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Message Pransh AI..."
        style={{
          flex: 1,
          padding: "12px",
          borderRadius: "10px",
          border: "none",
          outline: "none"
        }}
      />

      <button
        style={{
          padding: "10px",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        🎤
      </button>

      <button
        onClick={sendMessage}
        style={{
          padding: "12px 18px",
          borderRadius: "10px",
          background: "#10a37f",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
      >
        ➤
      </button>
    </div>
  );
}
