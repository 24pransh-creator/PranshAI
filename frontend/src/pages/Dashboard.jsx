import React, { useState } from "react";
import Chat from "./Chat";

function Dashboard() {
  const [openChat, setOpenChat] = useState(false);

  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  };

  if (openChat) {
    return <Chat />;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "30px",
      }}
    >
      <h1>🎉 Welcome to Pransh AI Dashboard</h1>

      <div
        style={{
          background: "#1e293b",
          padding: "20px",
          borderRadius: "10px",
          maxWidth: "500px",
        }}
      >
        <h2>👤 User Details</h2>

        <p><b>Name:</b> {user?.name}</p>
        <p><b>Email:</b> {user?.email}</p>

        <button
          onClick={() => setOpenChat(true)}
          style={{
            marginTop: "15px",
            marginRight: "10px",
            padding: "10px 20px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          🤖 Open AI Chat
        </button>

        <button
          onClick={logout}
          style={{
            marginTop: "15px",
            padding: "10px 20px",
            background: "red",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
