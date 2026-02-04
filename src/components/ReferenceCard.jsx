export default function ReferenceCard({ chats, onNewChat }) {
  return (
    <div style={styles.sidebar}>
      <button style={styles.newChat} onClick={onNewChat}>
        + New Chat
      </button>

      {chats.map((_, i) => (
        <div key={i} style={styles.chatItem}>
          Chat {i + 1}
        </div>
      ))}
    </div>
  );
}

const styles = {
  sidebar: {
    width: 260,
    background: "rgba(255,255,255,0.03)",
    borderRight: "1px solid #1e293b",
    padding: 16,
  },
  newChat: {
    width: "100%",
    padding: 10,
    marginBottom: 12,
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
  },
  chatItem: {
    padding: 10,
    borderRadius: 6,
    background: "rgba(255,255,255,0.05)",
    marginBottom: 8,
    cursor: "pointer",
  },
};
