import { useState } from "react";
import "./Sidebar.css";

export default function Sidebar({
  chats,
  activeChatId,
  onNewChat,
  onSelectChat,
  onRenameChat,
}) {
  const [editingId, setEditingId] = useState(null);
  const [title, setTitle] = useState("");

  const startRename = (chat) => {
    setEditingId(chat.id);
    setTitle(chat.title);
  };

  const submitRename = (id) => {
    if (title.trim()) onRenameChat(id, title.trim());
    setEditingId(null);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <h2 className="logo">OpsMind AI</h2>
        <button className="new-chat-btn" onClick={onNewChat}>
          + New Chat
        </button>
      </div>

      <div className="sidebar-section">
        <p className="section-title">Recent</p>

        {chats.map((chat) => (
          <div
            key={chat.id}
            className={`chat-item ${chat.id === activeChatId ? "active" : ""}`}
            onClick={() => onSelectChat(chat.id)}
            onDoubleClick={() => startRename(chat)}
          >
            {editingId === chat.id ? (
              <input
                className="rename-input"
                value={title}
                autoFocus
                onChange={(e) => setTitle(e.target.value)}
                onBlur={() => submitRename(chat.id)}
                onKeyDown={(e) => e.key === "Enter" && submitRename(chat.id)}
              />
            ) : (
              chat.title
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}
