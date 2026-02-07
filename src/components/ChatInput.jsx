import { useState } from "react";
import "./ChatInput.css";

export default function ChatInput({ onSend }) {
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);

  const send = () => {
    if (!text.trim() && !file) return;
    onSend({ text: text.trim(), file });
    setText("");
    setFile(null);
  };

  return (
    <div className="chat-input-wrapper">
      {file && (
        <div className="file-preview">
          📎 {file.name}
          <span onClick={() => setFile(null)}>✕</span>
        </div>
      )}

      <div className="chat-input">
        <label className="upload-btn">
          📎
          <input
            type="file"
            hidden
            accept=".pdf,image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </label>

        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Message OpsMind..."
          onKeyDown={(e) => e.key === "Enter" && send()}
        />

        <button onClick={send}>Send</button>
      </div>
    </div>
  );
}
