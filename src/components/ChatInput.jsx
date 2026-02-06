import { useState } from "react";

export default function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      style={{
        padding: "16px",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        background: "#0f132a",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "12px",
          alignItems: "center",
        }}
      >
        <textarea
          placeholder="Message OpsMind…"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={1}
          style={{
            flex: 1,
            resize: "none",
            padding: "12px",
            borderRadius: "12px",
            border: "none",
            outline: "none",
            background: "#1c2146",
            color: "white",
          }}
        />

        <button
          onClick={handleSend}
          style={{
            padding: "10px 16px",
            borderRadius: "12px",
            border: "none",
            background: "#6c6cff",
            color: "white",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
