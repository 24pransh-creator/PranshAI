import React from "react";

export default function MessageBubble({
  sender,
  text,
}) {
  const isUser = sender === "You";

  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        margin: "15px 0",
      }}
    >
      <div
        style={{
          maxWidth: "80%",
          background: isUser ? "#10a37f" : "#444654",
          color: "white",
          padding: "14px",
          borderRadius: "16px",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          boxShadow: "0 2px 10px rgba(0,0,0,0.25)",
        }}
      >
        <div
          style={{
            fontWeight: "bold",
            marginBottom: "8px",
          }}
        >
          {isUser ? "🧑 You" : "🤖 Pransh AI"}
        </div>

        <div>{text}</div>

        <div
          style={{
            marginTop: "8px",
            textAlign: "right",
            fontSize: "11px",
            color: "#d1d5db",
          }}
        >
          {time}
        </div>
      </div>
    </div>
  );
}
