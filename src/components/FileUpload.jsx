export default function FileUpload({ onUpload }) {
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    onUpload(file); // 🔥 SEND FILE UP
    e.target.value = ""; // reset
  };

  return (
    <label
      style={{
        width: 36,
        height: 36,
        borderRadius: 8,
        background: "#1b1f36",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        fontSize: 18,
      }}
      title="Upload file"
    >
      📎
      <input
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </label>
  );
}
