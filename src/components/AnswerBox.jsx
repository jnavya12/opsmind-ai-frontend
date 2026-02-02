const AnswerBox = ({ answer }) => {
  if (!answer) return null;

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "16px",
        backgroundColor: "#f9fafb",
        borderRadius: "8px",
        border: "1px solid #e5e7eb",
        fontSize: "14px",
        color: "#111827",
      }}
    >
      <strong>Answer:</strong>
      <p style={{ marginTop: "8px" }}>{answer}</p>
    </div>
  );
};

export default AnswerBox;
