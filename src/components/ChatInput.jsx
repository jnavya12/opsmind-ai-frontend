import { useState } from "react";
import FileUpload from "./FileUpload";
import "./ChatInput.css";

export default function ChatInput({ onSend, onUpload }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <div className="chat-input">
      <FileUpload onUpload={onUpload} />

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Message OpsMind..."
      />

      <button onClick={handleSend}>Send</button>
    </div>
  );
}
