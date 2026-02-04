import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function DashboardLayout() {
  const navigate = useNavigate();

  return (
    <div style={styles.wrapper}>
      <Navbar onWorkspace={() => navigate("/workspace")} />

      <div style={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    background: "radial-gradient(circle at top, #020617, #010314)",
    color: "#e5e7eb",
  },
  content: {
    height: "calc(100vh - 64px)",
  },
};
