import { useState } from "react";

const QueryBox = () => {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = () => {
    setAnswer(
      "Refunds can be processed within 7 working days. (Source: HR_Policy.pdf, Page 12)",
    );
  };

  return (
    <div style={{ marginTop: "32px" }}>
      <input
        type="text"
        placeholder="Ask a question about company policies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #cbd5f5",
          fontSize: "14px",
          marginBottom: "12px",
        }}
      />

      <button
        onClick={handleAsk}
        disabled={!query}
        style={{
          backgroundColor: query ? "#16a34a" : "#9ca3af",
          color: "#ffffff",
          border: "none",
          padding: "10px 18px",
          borderRadius: "8px",
          fontSize: "14px",
          cursor: query ? "pointer" : "not-allowed",
        }}
      >
        Ask OpsMind
      </button>

      {answer && (
        <div
          style={{
            marginTop: "16px",
            padding: "16px",
            backgroundColor: "#f0fdf4",
            borderRadius: "8px",
            fontSize: "14px",
            color: "#065f46",
          }}
        >
          {answer}
        </div>
      )}
    </div>
  );
};

export default QueryBox;
