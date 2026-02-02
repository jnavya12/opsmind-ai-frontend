import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OtpVerify() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const handleVerify = () => {
    if (otp !== "123456") {
      alert("Invalid OTP");
      return;
    }

    const pending = JSON.parse(localStorage.getItem("pendingUser"));
    localStorage.setItem("user", JSON.stringify(pending));
    localStorage.removeItem("pendingUser");

    navigate("/dashboard");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Verify OTP</h2>

        <input
          style={styles.input}
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        <button style={styles.button} onClick={handleVerify}>
          Verify
        </button>

        <p style={styles.hint}>Demo OTP: 123456</p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    width: "100vw",
    minHeight: "100vh",
    background: "#020617",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 360,
    padding: 32,
    borderRadius: 16,
    background: "#0f172a",
    textAlign: "center",
  },
  title: { color: "#e5e7eb", marginBottom: 20 },
  input: {
    width: "100%",
    padding: 12,
    marginBottom: 12,
    background: "#020617",
    border: "1px solid #1e293b",
    color: "#e5e7eb",
    borderRadius: 8,
    textAlign: "center",
  },
  button: {
    width: "100%",
    padding: 12,
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    fontWeight: 600,
  },
  hint: {
    marginTop: 10,
    color: "#94a3b8",
  },
};
