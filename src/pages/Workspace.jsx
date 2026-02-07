import { useRef, useState } from "react";
import "./workspace.css";

export default function Workspace() {
  const fileInputRef = useRef(null);

  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;
    setFile(selected);
  };

  const handleSend = () => {
    if (!text && !file) return;

    const newMessages = [];

    if (text) {
      newMessages.push({
        type: "user",
        content: text,
      });
    }

    if (file) {
      newMessages.push({
        type: "file",
        content: file.name,
      });
    }

    setMessages((prev) => [...prev, ...newMessages]);

    // reset
    setText("");
    setFile(null);
    fileInputRef.current.value = "";
  };

  return (
    <div className="workspace-main">
      {/* CHAT AREA */}
      <div className="messages">
        {messages.length === 0 && (
          <div className="welcome">
            <div className="orb"></div>
            <h1>How can OpsMind help you today?</h1>
            <p>Start a new chat or type below</p>
          </div>
        )}

        {messages.map((msg, i) => {
          if (msg.type === "user") {
            return (
              <div key={i} className="message user">
                {msg.content}
              </div>
            );
          }

          if (msg.type === "file") {
            return (
              <div key={i} className="message user file">
                📄 {msg.content}
              </div>
            );
          }

          return null;
        })}
      </div>

      {/* INPUT BAR */}
      <div className="chat-input">
        <button className="upload-btn" onClick={handleFileClick}>
          📎
        </button>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*,.pdf"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />

        <input
          type="text"
          placeholder="Message OpsMind..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />

        <button
          className="send-btn"
          onClick={handleSend}
          disabled={!text && !file}
        >
          Send
        </button>
      </div>
    </div>
  );
}
