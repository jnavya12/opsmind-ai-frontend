import { useNavigate } from "react-router-dom";
import { loginUser } from "../utils/auth";
import "./Signup.css";

export default function Signup() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;

    // same auth flow as login
    loginUser({ email });

    navigate("/workspace", { replace: true });
  };

  return (
    <div className="auth-root">
      <div className="auth-card">
        <h1 className="brand">OpsMind AI</h1>
        <p className="subtitle">Create your account</p>

        <form onSubmit={handleSignup} className="auth-form">
          <input name="email" type="email" placeholder="Email" required />

          <input type="password" placeholder="Password" required />

          <button type="submit">Sign up</button>
        </form>

        <p className="switch-text">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </div>
    </div>
  );
}
