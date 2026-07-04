function Login() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "Arial",
      }}
    >
      <h1>🔐 Login</h1>

      <input
        type="email"
        placeholder="Email"
        style={{
          padding: "12px",
          width: "280px",
          margin: "10px",
          borderRadius: "8px",
        }}
      />

      <input
        type="password"
        placeholder="Password"
        style={{
          padding: "12px",
          width: "280px",
          margin: "10px",
          borderRadius: "8px",
        }}
      />

      <button
        style={{
          padding: "12px 30px",
          marginTop: "15px",
          borderRadius: "8px",
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
