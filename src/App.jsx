import { useState, useRef } from "react";
import "./index.css";

export default function App() {
  const [chats, setChats] = useState([{ id: 1, name: "Chat 1", messages: [] }]);
  const [activeChatId, setActiveChatId] = useState(1);
  const [input, setInput] = useState("");
  const [showSettings, setShowSettings] = useState(false);
  const [attachedFile, setAttachedFile] = useState(null);

  const fileInputRef = useRef(null);
  const activeChat = chats.find((c) => c.id === activeChatId);

  const handleNewChat = () => {
    const newChat = {
      id: Date.now(),
      name: `Chat ${chats.length + 1}`,
      messages: [],
    };
    setChats([...chats, newChat]);
    setActiveChatId(newChat.id);
  };

  const handleSend = () => {
    if (!input.trim() && !attachedFile) return;

    const userMessage = {
      role: "user",
      text: input,
      file: attachedFile,
    };

    const aiMessage = {
      role: "ai",
      text: attachedFile
        ? "I've received your file. Once processed through the knowledge ingestion pipeline, I can summarize it or answer questions based on its content."
        : "This is a demo AI response. In production, this would be generated using the RAG pipeline.",
    };

    setChats((prev) =>
      prev.map((chat) =>
        chat.id === activeChatId
          ? {
              ...chat,
              messages: [...chat.messages, userMessage, aiMessage],
            }
          : chat,
      ),
    );

    setInput("");
    setAttachedFile(null);
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setAttachedFile({
      name: file.name,
      type: file.type,
      url: file.type.startsWith("image/") ? URL.createObjectURL(file) : null,
    });
  };

  return (
    <div className="app-root">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="sidebar-header">OpsMind AI</div>

        <div className="sidebar-nav">
          <button className="sidebar-item" onClick={handleNewChat}>
            + New Chat
          </button>

          {chats.map((chat) => (
            <button
              key={chat.id}
              className={`sidebar-item ${
                chat.id === activeChatId ? "active" : ""
              }`}
              onClick={() => setActiveChatId(chat.id)}
            >
              💬 {chat.name}
            </button>
          ))}
        </div>

        <div className="sidebar-footer">
          <button
            className="sidebar-item muted"
            onClick={() => setShowSettings(true)}
          >
            ⚙ Settings
          </button>
          <button className="sidebar-item muted">⏻ Logout</button>
        </div>
      </aside>

      {/* WORKSPACE */}
      <main className="workspace">
        <div className="chat-container">
          {activeChat.messages.length === 0 ? (
            <div className="empty-state">
              <h1>Ask anything</h1>
              <p>OpsMind AI is ready.</p>

              <div className="prompt-grid">
                {[
                  "Summarize a document",
                  "Explain a topic simply",
                  "Draft a professional email",
                  "Answer a technical question",
                ].map((p) => (
                  <button
                    key={p}
                    className="prompt-card"
                    onClick={() => setInput(p)}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="messages">
              {activeChat.messages.map((msg, i) => (
                <div
                  key={i}
                  className={`message ${msg.role === "user" ? "user" : "ai"}`}
                >
                  {msg.file && (
                    <div className="file-preview">
                      {msg.file.url ? (
                        <img src={msg.file.url} alt="upload" />
                      ) : (
                        <span>📄 {msg.file.name}</span>
                      )}
                    </div>
                  )}
                  {msg.text && <p>{msg.text}</p>}
                </div>
              ))}
            </div>
          )}

          {/* INPUT BAR */}
          <div className="input-bar">
            {attachedFile && (
              <div className="attached-preview">
                {attachedFile.url ? (
                  <img src={attachedFile.url} alt="preview" />
                ) : (
                  <span>{attachedFile.name}</span>
                )}
              </div>
            )}

            <button
              className="attach-btn"
              onClick={() => fileInputRef.current.click()}
            >
              📎
            </button>

            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <button className="send-btn" onClick={handleSend}>
              Send
            </button>

            <input
              ref={fileInputRef}
              type="file"
              hidden
              accept="image/*,.pdf,.doc,.docx,.txt"
              onChange={handleFileSelect}
            />
          </div>
        </div>
      </main>

      {/* SETTINGS MODAL */}
      {showSettings && (
        <div className="modal-backdrop">
          <div className="settings-modal">
            <div className="modal-header">
              <h2>Settings</h2>
              <button onClick={() => setShowSettings(false)}>✕</button>
            </div>

            <div className="modal-section">
              <h4>Appearance</h4>
              <div className="modal-row">
                <span>Theme</span>
                <span className="value">Dark</span>
              </div>
            </div>

            <div className="modal-section">
              <h4>AI Preferences</h4>
              <div className="modal-row">
                <span>AI Mode</span>
                <span className="value">Demo</span>
              </div>
              <div className="modal-row">
                <span>Response Style</span>
                <span className="value">Balanced</span>
              </div>
            </div>

            <div className="modal-section">
              <h4>Session</h4>
              <div className="modal-row">
                <span>Chat Storage</span>
                <span className="value">In-memory</span>
              </div>
            </div>

            <button
              className="modal-close-btn"
              onClick={() => setShowSettings(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
