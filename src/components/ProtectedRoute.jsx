import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const user = localStorage.getItem("opsmind_user");
  return user ? children : <Navigate to="/" replace />;
}
