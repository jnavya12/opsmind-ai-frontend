import { useState } from "react";
import "./Sidebar.css";

export default function Sidebar({
  chats,
  activeChatId,
  onNewChat,
  onSelectChat,
}) {
  const [editingId, setEditingId] = useState(null);
  const [title, setTitle] = useState("");

  const startEdit = (chat) => {
    setEditingId(chat.id);
    setTitle(chat.title);
  };

  const saveEdit = () => {
    if (!title.trim()) return;
    chats.find((c) => c.id === editingId).title = title.trim();
    setEditingId(null);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>OpsMind AI</h2>
        <button className="new-chat-btn" onClick={onNewChat}>
          + New Chat
        </button>
      </div>

      <div className="sidebar-section">Recent</div>

      <div className="chat-list">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className={`chat-item ${chat.id === activeChatId ? "active" : ""}`}
            onClick={() => onSelectChat(chat.id)}
            onDoubleClick={() => startEdit(chat)}
          >
            {editingId === chat.id ? (
              <input
                autoFocus
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onBlur={saveEdit}
                onKeyDown={(e) => e.key === "Enter" && saveEdit()}
              />
            ) : (
              <span>{chat.title}</span>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}
