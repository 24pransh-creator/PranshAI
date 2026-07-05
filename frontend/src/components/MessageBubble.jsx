import React from "react";

export default function MessageBubble({ sender, text }) {
  const isUser = sender === "You";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        margin: "10px 0"
      }}
    >
      <div
        style={{
          maxWidth: "75%",
          padding: "12px 16px",
          borderRadius: "16px",
          background: isUser ? "#2563eb" : "#374151",
          color: "white",
          wordBreak: "break-word"
        }}
      >
        <strong>{sender}</strong>
        <br />
        {text}
      </div>
    </div>
  );
}
