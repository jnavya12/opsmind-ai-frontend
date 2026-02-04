const ReferenceCard = ({ source }) => {
  if (!source) return null;

  return (
    <div
      style={{
        marginTop: "10px",
        padding: "10px 14px",
        borderRadius: "8px",
        background: "#0f172a",
        border: "1px solid #1e293b",
        fontSize: "12px",
        color: "#cbd5f5",
        width: "fit-content",
      }}
    >
      📄 <strong>Source:</strong> {source}
    </div>
  );
};

export default ReferenceCard;
