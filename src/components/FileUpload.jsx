export default function FileUpload({ onUpload }) {
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.type !== "application/pdf") {
      alert("Only PDF files allowed");
      return;
    }
    onUpload(file);
  };

  return (
    <label
      style={{
        marginRight: 12,
        cursor: "pointer",
        color: "#aaa",
        fontSize: 18,
      }}
      title="Upload PDF"
    >
      📎
      <input
        type="file"
        accept="application/pdf"
        hidden
        onChange={handleFile}
      />
    </label>
  );
}
