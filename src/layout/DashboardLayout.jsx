import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        background: "#0b1020",
      }}
    >
      <Sidebar />
      <main
        style={{
          flex: 1,
          overflow: "hidden",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}
