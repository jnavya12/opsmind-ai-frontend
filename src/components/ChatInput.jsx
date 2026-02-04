import { useState } from "react";

export default function ChatInput({ onSend }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message);
    setMessage("");
  };

  return (
    <div style={styles.container}>
      <input
        style={styles.input}
        placeholder="Ask something..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />

      <button style={styles.button} onClick={handleSend}>
        Ask
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: 10,
    marginTop: 20,
  },
  input: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    border: "1px solid #1e293b",
    background: "#020617",
    color: "#e5e7eb",
  },
  button: {
    padding: "0 20px",
    borderRadius: 8,
    border: "none",
    background: "#2563eb",
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer",
  },
};
