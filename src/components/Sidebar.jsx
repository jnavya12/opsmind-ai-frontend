import { useState } from "react";

export default function Sidebar({
  chats,
  activeChatId,
  onNewChat,
  onSelectChat,
  onRenameChat,
}) {
  const [editingId, setEditingId] = useState(null);
  const [title, setTitle] = useState("");

  return (
    <aside
      style={{
        width: 260,
        background: "#0e1430",
        color: "white",
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 12,
        borderRight: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <h2 style={{ margin: 0 }}>OpsMind AI</h2>

      <button
        onClick={onNewChat}
        style={{
          padding: "10px",
          borderRadius: 10,
          border: "none",
          background: "#6c6cff",
          color: "white",
          cursor: "pointer",
          fontWeight: 600,
        }}
      >
        + New Chat
      </button>

      <div style={{ marginTop: 8, opacity: 0.7 }}>Recent</div>

      <div style={{ flex: 1, overflowY: "auto" }}>
        {chats.map((c) => (
          <div
            key={c.id}
            onClick={() => onSelectChat(c.id)}
            style={{
              padding: "10px",
              borderRadius: 10,
              marginTop: 6,
              cursor: "pointer",
              background: c.id === activeChatId ? "#1b214a" : "transparent",
            }}
          >
            {editingId === c.id ? (
              <input
                autoFocus
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onBlur={() => {
                  onRenameChat(c.id, title || "New chat");
                  setEditingId(null);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    onRenameChat(c.id, title || "New chat");
                    setEditingId(null);
                  }
                }}
                style={{
                  width: "100%",
                  background: "#0f132a",
                  color: "white",
                  border: "none",
                  outline: "none",
                  padding: "6px 8px",
                  borderRadius: 8,
                }}
              />
            ) : (
              <div
                onDoubleClick={() => {
                  setEditingId(c.id);
                  setTitle(c.title);
                }}
                title="Double-click to rename"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {c.title}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}
