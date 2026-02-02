import { useNavigate } from "react-router-dom";

export default function Navbar({ active }) {
  const navigate = useNavigate();

  const linkStyle = (path) => ({
    color: active.includes(path) ? "#60a5fa" : "#e5e7eb",
    cursor: "pointer",
    marginLeft: 24,
    fontWeight: 500,
  });

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div
      style={{
        padding: "18px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "linear-gradient(180deg,#020617,#020617)",
      }}
    >
      <div style={{ color: "#fff", fontWeight: 700 }}>
        OpsMind AI
        <div style={{ fontSize: 12, color: "#94a3b8" }}>
          Context-Aware Corporate Knowledge Assistant
        </div>
      </div>

      <div>
        <span
          style={linkStyle("/workspace")}
          onClick={() => navigate("/dashboard/workspace")}
        >
          Workspace
        </span>
        <span
          style={linkStyle("/documents")}
          onClick={() => navigate("/dashboard/documents")}
        >
          Documents
        </span>
        <span
          style={linkStyle("/settings")}
          onClick={() => navigate("/dashboard/settings")}
        >
          Settings
        </span>
        <button
          onClick={logout}
          style={{
            marginLeft: 32,
            padding: "6px 14px",
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
