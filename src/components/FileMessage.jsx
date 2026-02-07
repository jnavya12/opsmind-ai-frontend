export default function FileMessage({ file }) {
  const isImage = file.type?.startsWith("image/");
  const ext = file.name.split(".").pop()?.toUpperCase();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "10px 12px",
        borderRadius: 12,
        background: "#11162a",
        maxWidth: 420,
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 8,
          background: "#1f243b",
          display: "grid",
          placeItems: "center",
          fontSize: 16,
        }}
      >
        {isImage ? "🖼️" : "📄"}
      </div>

      <div style={{ overflow: "hidden" }}>
        <div
          style={{
            fontSize: 14,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          title={file.name}
        >
          {file.name}
        </div>
        <div style={{ fontSize: 11, opacity: 0.6 }}>
          {isImage ? "Image" : `${ext} file`}
        </div>
      </div>
    </div>
  );
}
