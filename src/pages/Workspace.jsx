import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import ChatInput from "../components/ChatInput";
import { logoutUser } from "../utils/auth";
import { loadChats, saveChats } from "../utils/chatStore";

/* ---------- SAFE INIT (NO EFFECT SETSTATE) ---------- */
function initChats() {
  const stored = loadChats();
  if (stored.length > 0) return stored;

  return [
    {
      id: Date.now(),
      title: "New chat",
      messages: [],
    },
  ];
}

export default function Workspace() {
  const navigate = useNavigate();

  const [chats, setChats] = useState(initChats);
  const [activeChatId, setActiveChatId] = useState(initChats()[0].id);

  /* ---------- PERSIST ONLY ---------- */
  useEffect(() => {
    saveChats(chats);
  }, [chats]);

  const activeChat = chats.find((c) => c.id === activeChatId);

  /* ---------- ACTIONS ---------- */
  const handleNewChat = () => {
    const chat = {
      id: Date.now(),
      title: "New chat",
      messages: [],
    };
    setChats((prev) => [chat, ...prev]);
    setActiveChatId(chat.id);
  };

  const handleRenameChat = (id, title) => {
    setChats((prev) => prev.map((c) => (c.id === id ? { ...c, title } : c)));
  };

  const handleSend = (text) => {
    if (!activeChat) return;

    setChats((prev) =>
      prev.map((c) =>
        c.id === activeChat.id
          ? {
              ...c,
              messages: [
                ...c.messages,
                { id: Date.now(), role: "user", text },
                {
                  id: Date.now() + 1,
                  role: "ai",
                  text: "This is a simulated AI response from OpsMind ✨",
                },
              ],
            }
          : c,
      ),
    );
  };

  const handleUpload = (file) => {
    alert(`PDF uploaded: ${file.name}`);
  };

  const handleLogout = () => {
    logoutUser();
    navigate("/login", { replace: true });
  };

  /* ---------- UI ---------- */
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        background: "#0b0e1a",
        color: "white",
      }}
    >
      <Sidebar
        chats={chats}
        activeChatId={activeChatId}
        onNewChat={handleNewChat}
        onSelectChat={setActiveChatId}
        onRenameChat={handleRenameChat}
      />

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* TOP BAR */}
        <div
          style={{
            height: 60,
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "#0f132a",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h3>{activeChat?.title}</h3>
          <button
            onClick={handleLogout}
            style={{
              padding: "8px 14px",
              borderRadius: 8,
              border: "1px solid #444",
              background: "transparent",
              color: "white",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>

        {/* CHAT AREA */}
        <div
          style={{
            flex: 1,
            padding: 32,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {!activeChat || activeChat.messages.length === 0 ? (
            <div style={{ margin: "auto", textAlign: "center", opacity: 0.6 }}>
              <h1>How can OpsMind help you today?</h1>
              <p>Start a new chat or type below</p>
            </div>
          ) : (
            activeChat.messages.map((m) => (
              <div
                key={m.id}
                style={{
                  maxWidth: "60%",
                  marginBottom: 16,
                  alignSelf: m.role === "user" ? "flex-end" : "flex-start",
                  background: m.role === "user" ? "#6c6cff" : "#1b1f36",
                  padding: "12px 16px",
                  borderRadius: 14,
                }}
              >
                {m.text}
              </div>
            ))
          )}
        </div>

        <ChatInput onSend={handleSend} onUpload={handleUpload} />
      </div>
    </div>
  );
}
