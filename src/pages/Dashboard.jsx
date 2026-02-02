import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

export default function DashboardLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (!auth) navigate("/");
  }, [navigate]);

  return (
    <div style={{ minHeight: "100vh", background: "#020617" }}>
      <Navbar active={location.pathname} />
      <Outlet />
    </div>
  );
}
