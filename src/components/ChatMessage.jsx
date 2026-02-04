const ChatMessage = ({ role, text, source }) => {
  const isUser = role === "user";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        marginBottom: "14px",
      }}
    >
      <div
        style={{
          maxWidth: "70%",
          padding: "14px 16px",
          borderRadius: "14px",
          background: isUser ? "#2563eb" : "#020617",
          color: "#e5e7eb",
          border: isUser ? "none" : "1px solid #1e293b",
          fontSize: "14px",
        }}
      >
        <div>{text}</div>

        {!isUser && source && (
          <div
            style={{
              marginTop: "8px",
              fontSize: "12px",
              color: "#94a3b8",
              borderTop: "1px solid #1e293b",
              paddingTop: "6px",
            }}
          >
            📄 {source}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
