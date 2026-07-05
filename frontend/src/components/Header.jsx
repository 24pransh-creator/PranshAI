import React from "react";

export default function Header() {
  return (
    <div
      style={{
        height: "60px",
        background: "#202123",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        borderBottom: "1px solid #333"
      }}
    >
      <h2>🤖 Pransh AI</h2>

      <div
        style={{
          display: "flex",
          gap: "10px"
        }}
      >
        <button
          style={{
            padding: "8px 14px",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          🌙 Theme
        </button>

        <button
          style={{
            padding: "8px 14px",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          👤 Profile
        </button>
      </div>
    </div>
  );
}
