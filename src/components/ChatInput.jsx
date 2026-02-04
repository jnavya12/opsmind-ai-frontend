import { useState } from "react";

const ChatInput = ({ onSend, disabled }) => {
  const [value, setValue] = useState("");

  const handleSend = () => {
    if (!value.trim()) return;
    onSend(value);
    setValue("");
  };

  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        marginTop: 24,
        position: "sticky",
        bottom: 0,
        background: "#020617",
        paddingTop: 12,
      }}
    >
      <input
        type="text"
        placeholder="Ask a question about company policies..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        style={{
          flex: 1,
          padding: "12px 14px",
          borderRadius: 10,
          border: "1px solid #334155",
          background: "#020617",
          color: "#e5e7eb",
          outline: "none",
        }}
      />

      <button
        onClick={handleSend}
        disabled={disabled}
        style={{
          padding: "12px 18px",
          borderRadius: 10,
          border: "none",
          background: disabled ? "#475569" : "#0ea5e9",
          color: "#fff",
          cursor: disabled ? "not-allowed" : "pointer",
        }}
      >
        Ask
      </button>
    </div>
  );
};

export default ChatInput;
