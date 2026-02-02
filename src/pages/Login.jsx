import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    setError("");

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      setError("No account found. Please sign up first.");
      return;
    }

    const user = JSON.parse(storedUser);

    if (user.email !== email || user.password !== password) {
      setError("Invalid email or password");
      return;
    }

    // ✅ AUTH SUCCESS
    localStorage.setItem("auth", "true");
    navigate("/dashboard");
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.title}>OpsMind AI</h2>
        <p style={styles.subtitle}>Context-Aware Knowledge Assistant</p>

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

        {error && <p style={styles.error}>{error}</p>}

        <button style={styles.button} onClick={handleLogin}>
          Login
        </button>

        <p style={styles.linkText}>
          New user?{" "}
          <span style={styles.link} onClick={() => navigate("/signup")}>
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(180deg,#020617,#020617)",
  },
  card: {
    width: 380,
    padding: 32,
    borderRadius: 18,
    background: "rgba(255,255,255,0.06)",
    backdropFilter: "blur(12px)",
    boxShadow: "0 30px 60px rgba(0,0,0,0.6)",
    color: "#e5e7eb",
    textAlign: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: 700,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: "#94a3b8",
    marginBottom: 24,
  },
  input: {
    width: "100%",
    padding: 12,
    marginBottom: 14,
    borderRadius: 10,
    border: "1px solid #1e293b",
    background: "#020617",
    color: "#e5e7eb",
  },
  button: {
    width: "100%",
    padding: 12,
    borderRadius: 12,
    border: "none",
    background: "#2563eb",
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer",
    marginTop: 8,
  },
  linkText: {
    marginTop: 18,
    fontSize: 14,
  },
  link: {
    color: "#60a5fa",
    cursor: "pointer",
  },
  error: {
    color: "#f87171",
    fontSize: 13,
    marginBottom: 10,
  },
};
