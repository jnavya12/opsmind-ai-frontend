import { useNavigate } from "react-router-dom";
import { loginUser } from "../utils/auth";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;

    // store user email properly
    loginUser({ email });

    navigate("/workspace", { replace: true });
  };

  return (
    <div className="auth-root">
      <div className="auth-card">
        <h1 className="brand">OpsMind AI</h1>
        <p className="subtitle">Sign in to continue</p>

        <form onSubmit={handleLogin} className="auth-form">
          <input name="email" type="email" placeholder="Email" required />

          <input type="password" placeholder="Password" required />

          <button type="submit">Login</button>
        </form>

        <p className="switch-text">
          New here?{" "}
          <span onClick={() => navigate("/signup")}>Create account</span>
        </p>
      </div>
    </div>
  );
}
