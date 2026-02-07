import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatInput from "../components/ChatInput";
import "./Workspace.css";

const STORAGE_KEY = "opsmind_chats";

const createChat = () => ({
  id: crypto.randomUUID(),
  title: "New chat",
  messages: [],
});

export default function Workspace() {
  const [chats, setChats] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [createChat()];
  });

  const [activeChatId, setActiveChatId] = useState(() => chats[0].id);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(chats));
  }, [chats]);

  const activeChat = chats.find((c) => c.id === activeChatId);

  const handleNewChat = () => {
    const chat = createChat();
    setChats((p) => [chat, ...p]);
    setActiveChatId(chat.id);
  };

  const handleSend = ({ text, file }) => {
    if (!text && !file) return;

    setChats((prev) =>
      prev.map((c) =>
        c.id === activeChatId
          ? {
              ...c,
              messages: [
                ...c.messages,
                ...(text ? [{ role: "user", text }] : []),
                ...(file
                  ? [{ role: "user", text: file.name, file: true }]
                  : []),
                {
                  role: "ai",
                  text: file
                    ? "PDF received. Ask anything about it 📄"
                    : "This is a simulated AI response ✨",
                },
              ],
            }
          : c,
      ),
    );
  };

  return (
    <div className="workspace-root">
      <Sidebar
        chats={chats}
        activeChatId={activeChatId}
        onNewChat={handleNewChat}
        onSelectChat={setActiveChatId}
      />

      <div className="workspace-main">
        {/* TOP BAR */}
        <div className="workspace-topbar">
          <h3>{activeChat?.title}</h3>
          <button className="logout-btn">Logout</button>
        </div>

        {/* MESSAGES */}
        <div className="messages">
          {activeChat.messages.length === 0 ? (
            <div className="welcome">
              <div className="orb" />
              <h1>How can OpsMind help you today?</h1>
              <p>Start a new chat or type below</p>
            </div>
          ) : (
            activeChat.messages.map((m, i) => (
              <div key={i} className={`message ${m.role}`}>
                {m.file ? `📄 ${m.text}` : m.text}
              </div>
            ))
          )}
        </div>

        {/* INPUT */}
        <ChatInput onSend={handleSend} />
      </div>
    </div>
  );
}
