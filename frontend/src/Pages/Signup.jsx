function Signup() {
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
      <h1>📝 Create Account</h1>

      <input
        type="text"
        placeholder="Full Name"
        style={{
          width: "300px",
          padding: "12px",
          margin: "10px",
          borderRadius: "8px",
        }}
      />

      <input
        type="email"
        placeholder="Email"
        style={{
          width: "300px",
          padding: "12px",
          margin: "10px",
          borderRadius: "8px",
        }}
      />

      <input
        type="password"
        placeholder="Password"
        style={{
          width: "300px",
          padding: "12px",
          margin: "10px",
          borderRadius: "8px",
        }}
      />

      <button
        style={{
          marginTop: "20px",
          padding: "12px 30px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Create Account
      </button>
    </div>
  );
}

export default Signup;
