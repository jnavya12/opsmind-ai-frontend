import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../utils/auth";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Fill all fields");
      return;
    }

    loginUser({ email });
    navigate("/app/workspace", { replace: true });
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>OpsMind AI</h2>

        <input
          style={styles.input}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={styles.button} onClick={handleLogin}>
          Login
        </button>

        {/* ✅ SIGNUP LINK BACK */}
        <p style={styles.link} onClick={() => navigate("/signup")}>
          Create new account
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    width: "100vw",
    height: "100vh",
    background: "#020617",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 380,
    padding: 32,
    background: "#0f172a",
    borderRadius: 16,
  },
  title: {
    color: "#e5e7eb",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 12,
    marginBottom: 12,
    background: "#020617",
    border: "1px solid #1e293b",
    color: "#e5e7eb",
    borderRadius: 8,
  },
  button: {
    width: "100%",
    padding: 12,
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    fontWeight: 600,
    cursor: "pointer",
  },
  link: {
    marginTop: 14,
    textAlign: "center",
    color: "#93c5fd",
    cursor: "pointer",
    fontSize: 13,
  },
};
