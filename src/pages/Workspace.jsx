import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../utils/auth";
import ChatInput from "../components/ChatInput";
import Sidebar from "../components/Sidebar";
import { loadChats, saveChats } from "../utils/chatStore";

/* ✅ Lazy initialization (NO setState in useEffect) */
function initChats() {
  const loaded = loadChats();
  if (loaded.length > 0) return loaded;

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
  const [activeChatId, setActiveChatId] = useState(() => initChats()[0].id);

  /* ✅ Persist only */
  useEffect(() => {
    saveChats(chats);
  }, [chats]);

  const activeChat = chats.find((c) => c.id === activeChatId);

  const handleNewChat = () => {
    const nc = {
      id: Date.now(),
      title: "New chat",
      messages: [],
    };
    setChats((prev) => [nc, ...prev]);
    setActiveChatId(nc.id);
  };

  const handleRenameChat = (id, title) => {
    setChats((prev) => prev.map((c) => (c.id === id ? { ...c, title } : c)));
  };

  const handleSend = (text) => {
    if (!text.trim() || !activeChat) return;

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

  const handleLogout = () => {
    logoutUser();
    navigate("/login", { replace: true });
  };

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
          <h3 style={{ margin: 0 }}>{activeChat?.title}</h3>
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
            <div style={{ margin: "auto", textAlign: "center", opacity: 0.7 }}>
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

        <ChatInput onSend={handleSend} />
      </div>
    </div>
  );
}
