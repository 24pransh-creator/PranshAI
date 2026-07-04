import { useState } from "react";

function Chat() {
  const [messages, setMessages] = useState([
    {
      sender: "AI",
      text: "👋 Hello! I am Pransh AI. How can I help you?"
    }
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;

    setMessages((prev) => [
      ...prev,
      { sender: "You", text: input }
    ]);

    setInput("");
  };

  return (
    <div
      style={{
        background: "#0f172a",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Arial"
      }}
    >
      <div
        style={{
          padding: "15px",
          background: "#1e293b",
          fontSize: "22px",
          fontWeight: "bold"
        }}
      >
        🤖 Pransh AI Chat
      </div>

      <div
        style={{
          flex: 1,
          padding: "15px",
          overflowY: "auto"
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              background:
                msg.sender === "You" ? "#2563eb" : "#334155",
              padding: "12px",
              marginBottom: "10px",
              borderRadius: "10px",
              maxWidth: "80%"
            }}
          >
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          padding: "15px",
          background: "#1e293b"
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          style={{
            flex: 1,
            padding: "12px",
            borderRadius: "8px",
            border: "none"
          }}
        />

        <button
          onClick={sendMessage}
          style={{
            marginLeft: "10px",
            padding: "12px 20px",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
