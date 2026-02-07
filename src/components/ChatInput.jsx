import { useState } from "react";

export default function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <form className="chat-input-wrapper" onSubmit={handleSubmit}>
      <div className="chat-input">
        <span className="clip">📎</span>

        <input
          type="text"
          placeholder="Message OpsMind..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button type="submit">Send</button>
      </div>
    </form>
  );
}
