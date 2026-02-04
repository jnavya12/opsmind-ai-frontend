import { useNavigate } from "react-router-dom";
import { logoutUser } from "../utils/auth";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    logoutUser();
    navigate("/", { replace: true });
  };

  return (
    <div style={styles.nav}>
      <div style={styles.logo}>OpsMind AI</div>

      <div style={styles.links}>
        <span onClick={() => navigate("/app/workspace")}>Workspace</span>
        <span onClick={() => navigate("/app/settings")}>Settings</span>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

const styles = {
  nav: {
    height: 60,
    background: "#020617",
    borderBottom: "1px solid #1e293b",
    padding: "0 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#e5e7eb",
  },
  logo: { fontWeight: 600 },
  links: {
    display: "flex",
    gap: 20,
    alignItems: "center",
  },
};
