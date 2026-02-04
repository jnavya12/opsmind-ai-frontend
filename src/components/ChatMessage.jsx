export default function ChatMessage({ chat }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {/* USER */}
      <div
        style={{
          alignSelf: "flex-end",
          background: "#1e40af",
          padding: "12px 16px",
          borderRadius: "12px",
          maxWidth: "70%",
          color: "#fff",
        }}
      >
        {chat.question}
      </div>

      {/* AI */}
      <div
        style={{
          alignSelf: "flex-start",
          background: "#020617",
          border: "1px solid #1e293b",
          padding: "12px 16px",
          borderRadius: "12px",
          maxWidth: "70%",
          color: "#e5e7eb",
        }}
      >
        {chat.answer}
      </div>
    </div>
  );
}
