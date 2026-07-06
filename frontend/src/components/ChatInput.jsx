import React from "react";

export default function ChatInput({
  message,
  setMessage,
  sendMessage,
}) {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const startVoice = () => {
    if (!SpeechRecognition) {
      alert("Voice recognition is not supported on this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-IN";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      setMessage(text);
    };

    recognition.onerror = (event) => {
      console.log(event.error);
    };

    recognition.start();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        gap: "10px",
        padding: "15px",
        background: "#202123",
        borderTop: "1px solid #444",
      }}
    >
      <button
        style={{
          padding: "10px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        📎
      </button>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Message Pransh AI..."
        rows={1}
        style={{
          flex: 1,
          padding: "12px",
          borderRadius: "10px",
          border: "none",
          outline: "none",
          resize: "none",
          minHeight: "24px",
          maxHeight: "120px",
          fontFamily: "inherit",
        }}
      />

      <button
        onClick={startVoice}
        style={{
          padding: "10px",
          borderRadius: "8px",
          cursor: "pointer",
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
          cursor: "pointer",
        }}
      >
        ➤
      </button>
    </div>
  );
}
