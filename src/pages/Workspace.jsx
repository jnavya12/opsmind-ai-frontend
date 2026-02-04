import { useState } from "react";
import ChatInput from "../components/ChatInput";
import ChatMessage from "../components/ChatMessage";
import { getChats, saveChats } from "../utils/chatStore";

export default function Workspace() {
  const [chats, setChats] = useState(() => getChats());

  const handleSend = (text) => {
    if (!text.trim()) return;

    const newChat = {
      id: Date.now(),
      question: text,
      answer: "This is a demo response.",
    };

    const updated = [...chats, newChat];
    setChats(updated);
    saveChats(updated);
  };

  return (
    <div className="workspace">
      <div className="chat-area">
        {chats.length === 0 ? (
          <div className="empty-state">
            Ask something to start a conversation
          </div>
        ) : (
          chats.map((chat) => <ChatMessage key={chat.id} chat={chat} />)
        )}
      </div>

      {/* INPUT MUST ALWAYS RENDER */}
      <ChatInput onSend={handleSend} />
    </div>
  );
}
